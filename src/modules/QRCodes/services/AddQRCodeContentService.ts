import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository';
import AppError from '@shared/error/AppError'
import fs from 'fs'
import path from 'path'
import uploadConfig from '@config/uploadConfig'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class AddQRCodeToUserService {

  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository
  ) { }

  public async run( qrcode_id: string,
    name: string,
    size: number,
    key: string,
    url: string): Promise<QRCode> {
    try {
      const qrcode = await this.qrCodesRepository.get(qrcode_id) as QRCode

      qrcode.link = url;
      qrcode.enabled = true;
      qrcode.content = name;
      await this.qrCodesRepository.save(qrcode)

      return qrcode
    } catch (err) {
      console.log(err.message)
      throw new AppError(err.message)
    }
  }
}
