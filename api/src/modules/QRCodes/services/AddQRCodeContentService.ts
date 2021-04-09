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

  public async run(qrcode_id: string, contentFilename: string): Promise<QRCode> {
    try {
      console.log(contentFilename)
      const qrcode = await this.qrCodesRepository.get(qrcode_id) as QRCode

      if (qrcode.content) {
        const qrcodeFilePath = path.join(uploadConfig.directory, qrcode.content)
        const contentExists = await fs.promises.stat(qrcodeFilePath)

        if (contentExists) {
          await fs.promises.unlink(qrcodeFilePath)
        }
      }

      qrcode.content = contentFilename

      await this.qrCodesRepository.save(qrcode)

      return qrcode
    } catch (err) {
      console.log(err.message)
      throw new AppError(err.message)
    }
  }
}
