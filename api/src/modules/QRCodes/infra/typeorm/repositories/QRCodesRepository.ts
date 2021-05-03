import AppError from '@shared/error/AppError';
import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import { Repository, getRepository } from 'typeorm'
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository'
import User from '@modules/Users/infra/typeorm/models/user';

export default class QRCodesRepository implements IQRCodesRepository {

  ormRepostory: Repository<QRCode>;

  constructor() {
    this.ormRepostory = getRepository(QRCode)
  }

  private filterUser(user: User) {
    const { created_at, updated_at, password, ...filteredUser } = user
    return filteredUser
  }

  public async create(): Promise<QRCode> {
    const qrcode = this.ormRepostory.create({
      link: '',
      content: '',
      enabled: false,
    })
    await this.ormRepostory.save(qrcode)
    return qrcode
  }

  public async get(id: string): Promise<QRCode | undefined> {
    let qrcode = await this.ormRepostory.findOne(id, { relations: ['user', 'receivedUser'] })
    console.log(qrcode)
    if (qrcode) {
      if (qrcode.user) qrcode.user = this.filterUser(qrcode.user as User)
      if (qrcode.receivedUser) qrcode.receivedUser = this.filterUser(qrcode.receivedUser as User)
    }
    return qrcode || undefined
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

  public async receiveQRCode(
    qrcode: QRCode,
    user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode> {
    Object.assign(qrcode, { receivedUser: user })

    await this.ormRepostory.save(qrcode)
    return qrcode
  }

  public async activate(
    id: string,
    user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode> {

    let qrcode = await this.ormRepostory.findOne(id)

    if (!qrcode) throw new AppError('This QRCode does not exist')

    qrcode = {
      ...qrcode,
      enabled: true,
      link: `generate_qrcode/${id}`,
      content: '',
      user
    }

    await this.ormRepostory.save(qrcode)
    return qrcode
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepostory.delete(id)
  }
}
