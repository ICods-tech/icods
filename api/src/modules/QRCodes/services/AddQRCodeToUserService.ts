import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository';
import AppError from '@shared/error/AppError'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class AddQRCodeToUserService {

  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository
  ) {}

  public async run(qrcode_id: string, id: string): Promise<QRCode[] | []> {
    try {
      await this.qrCodesRepository.activate(qrcode_id, id)

      const allUserQRCodes = await this.qrCodesRepository.findAllUserQRCodes(id)

      return allUserQRCodes
    } catch(err) {
      throw new AppError(err.message)
    }
  }
}
