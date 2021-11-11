import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/interfaces/IQRCodesRepository';
import AppError from '../../../infra/error/AppError'
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
      qrcode.status = 'IN_PROGRESS';
      qrcode.content = name;
      await this.qrCodesRepository.save(qrcode)

      return qrcode
    } catch (err: any) {
      console.log(err.message)
      throw new AppError(err.message)
    }
  }
}
