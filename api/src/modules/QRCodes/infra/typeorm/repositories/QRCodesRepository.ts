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
    const qrcode = await this.ormRepostory.findOne(id, { relations: ['user'] })
    if (qrcode) {
      delete qrcode.user?.created_at
      delete qrcode.user?.updated_at
      delete qrcode.user?.password
      delete qrcode.user?.qrcodes

      return qrcode
    }
    return undefined
  }

  public async save(qrcode: QRCode): Promise<void> {
    await this.ormRepostory.save(qrcode)
  }

  public async activate(
    id: string,
    user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode> {

    let existingQRCode = await this.ormRepostory.findOne(id)

    if (!existingQRCode) {
      throw new AppError('This QRCode does not exist')
    }

    existingQRCode = {
      ...existingQRCode,
      enabled: true,
      link: `generate_qrcode/${id}`,
      content: '',
      user
    }

    await this.ormRepostory.save(existingQRCode)
    return existingQRCode
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepostory.delete(id)
  }
}
