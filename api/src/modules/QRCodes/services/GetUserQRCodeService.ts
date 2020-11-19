import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository';
import AppError from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe'

@injectable()
export default class GetUserQRCodeService {
  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository
  ) {}

  public async run(qrcode_id: string): Promise<QRCode> {
    try {
      const qrcode = await this.qrCodesRepository.get(qrcode_id) as QRCode
      return qrcode
    } catch(err) {
      throw new AppError(err.message)
    }
  }
}
