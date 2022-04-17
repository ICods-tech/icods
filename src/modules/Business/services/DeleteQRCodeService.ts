import IQRCodesRepository from '../../QRCodes/interfaces/IQRCodesRepository'
import { inject, injectable } from 'tsyringe'
import AppError from '../../../infra/error/AppError'

@injectable()
export default class DeleteQRCodeService {

  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository
  ) { }

  public async run(id: string): Promise<string> {
    const qrcode = await this.qrCodesRepository.get(id)

    if (!qrcode) {
      throw new AppError('qrcode not found', 404)
    }
    try {
      await this.qrCodesRepository.delete(id)

    } catch (error) {
      throw new AppError('Error deleting qrcode', 500)
    }
    return "qrcode deleted successfully";
  }
}
