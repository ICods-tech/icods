import { inject, injectable } from 'tsyringe'
import AppError from '../../../infra/error/AppError'
import IQRCodesRepository from '../../QRCodes/interfaces/IQRCodesRepository'
import ILotsRepository from '../interfaces/ILotsRepository'
import Lots from '../typeorm/models/lots'
const logger = require("../../../infra/middlewares/Logger");

@injectable()
export default class DeleteQRCodeService {

  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository,
    @inject('LotsRepository')
    private lotsRepository: ILotsRepository
  ) { }

  public async run(id: string): Promise<string> {
    try {
      const qrcode = await this.qrCodesRepository.get(id)

      if (!qrcode) {
        throw new AppError('qrcode not found', 404)
      }

      await this.qrCodesRepository.delete(id);

      const lot = qrcode?.lot as unknown as Lots;

      if (lot) {
        await this.lotsRepository.deleteQRCode(lot, id);
      }

      return "qrcode deleted successfully";
    } catch (error) {
      logger.log(error);
      throw new AppError('Error deleting qrcode', 500)
    }
  }

}
