import AppError from '../../../../infra/error/AppError';
import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import { Repository, getRepository } from 'typeorm'
import IQRCodesRepository from '@modules/QRCodes/interfaces/IQRCodesRepository'
import User from '@modules/Users/typeorm/models/user';
import { IColors } from '@modules/QRCodes/interfaces/IColors';

export default class QRCodesRepository implements IQRCodesRepository {

  ormRepostory: Repository<QRCode>;

  constructor() {
    this.ormRepostory = getRepository('qrcodes')
  }


  private filterMadeQRCode(qrcode: QRCode) {
    const { receivedColor, favorited, received_at, ...filteredQrCode } = qrcode;
    return filteredQrCode
  }

  private filterUser(user: User) {
    const { created_at, updated_at, password, ...filteredUser } = user
    return filteredUser
  }

  public async create(): Promise<QRCode> {
    const qrcode = this.ormRepostory.create({
      link: '',
      content: '',
      status: 'INACTIVE',
    })

    await this.ormRepostory.save(qrcode)

    return this.filterMadeQRCode(qrcode)
  }

  public async get(id: string): Promise<QRCode | undefined> {
    let qrcode = await this.ormRepostory.findOne(id, { relations: ['user', 'receivedUser'] })

    if (qrcode) {
      if (qrcode.user) qrcode.user = this.filterUser(qrcode.user as User)
      if (qrcode.receivedUser) qrcode.receivedUser = this.filterUser(qrcode.receivedUser as User)
    }

    return qrcode || undefined
  }

  public async getMultipleDeactivatedQRCodes(numberOfQrCodes: number): Promise<QRCode[] | []> {
    let qrcodes = await this.ormRepostory.find({ where: { status: 'INACTIVE' }, take: numberOfQrCodes })

    return qrcodes
  }

  public async save(qrcode: QRCode): Promise<void> {
    await this.ormRepostory.save(qrcode)
  }

  public async changeFavoriteStatus(qrCode: QRCode): Promise<QRCode> {
    const { favorited } = qrCode
    Object.assign(qrCode, { favorited: !favorited })

    this.ormRepostory.save(qrCode)

    return qrCode
  }

  public async changeQRCodeColor(qrCode: QRCode, color: IColors, type: 'madeColor' | 'receivedColor'): Promise<QRCode> {
    Object.assign(qrCode, { [type]: color })
    await this.ormRepostory.save(qrCode)

    return qrCode
  }

  public async receiveQRCode(
    qrcode: QRCode,
    user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode> {
    Object.assign(qrcode, {
      receivedUser: user,
      received_at: new Date()
    })

    await this.ormRepostory.save(qrcode)
    return qrcode
  }

  public async activate(
    id: string,
    user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode> {

    let qrcode = await this.ormRepostory.findOne(id)

    if (!qrcode) throw new AppError('This QRCode does not exist')
    qrcode.status = 'ACTIVE'
    qrcode = {
      ...qrcode,
      user
    }

    await this.ormRepostory.save(qrcode)
    return qrcode
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepostory.delete(id)
  }
}
