import AppError from '@shared/error/AppError';
import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import { Repository, getRepository } from 'typeorm'
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository'

export default class QRCodesRepository implements IQRCodesRepository {

  ormRepostory: Repository<QRCode>;

  constructor() {
    this.ormRepostory = getRepository(QRCode)
  }

  public async create(): Promise<QRCode> {
    const qrcode = this.ormRepostory.create({
      link: '',
      enabled: false,
    })
    await this.ormRepostory.save(qrcode)

    return qrcode
  }

  public async activate(id: string, user_id: string): Promise<QRCode> {
    let existingQRCode = await this.ormRepostory.findOne(id)

    if(!existingQRCode) {
      throw new AppError('This QRCode does not exist')
    }

    existingQRCode = {
      ...existingQRCode,
      enabled: true,
      link: `generate_qrcode/${id}`,
      user_id
    }

    await this.ormRepostory.save(existingQRCode)

    return existingQRCode
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepostory.delete(id)
  }
}
