import IQRCodesRepository from '../../QRCodes/interfaces/IQRCodesRepository'
import { inject, injectable } from 'tsyringe'
import AppError from '../../../infra/error/AppError'
import ILotsRepository from '../interfaces/ILotsRepository'

@injectable()
export default class DeleteQRCodeService {

  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository,
    @inject('LotsRepository')
    private lotsRepository: ILotsRepository
  ) { }

  public async run(id: string): Promise<string> {
    const qrcode = await this.qrCodesRepository.get(id)

    if (!qrcode) {
      throw new AppError('qrcode not found', 404)
    }
    try {
      await this.qrCodesRepository.delete(id)
      //ignore lint next line
      qrcode.lot?.numberOfQRCodes -= 1
      if(qrcode.lot) await this.lotsRepository.update(qrcode.lot)
      return "qrcode deleted successfully";
    } catch (error) {
      throw new AppError('Error deleting qrcode', 500)
    }
  }
}
