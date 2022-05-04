import { inject, injectable } from 'tsyringe'
import AppError from '../../../infra/error/AppError'
import IQRCodesRepository from '../../QRCodes/interfaces/IQRCodesRepository'
import ILotsRepository from '../interfaces/ILotsRepository'
import Lots from '../typeorm/models/lots'
import DeleteLotService from './DeleteLotService'

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
      const lotId = (qrcode?.lot as any as Lots).id;
      const lot = await this.lotsRepository.findById(lotId)
      if(lot !== undefined) {
        await this.handleNumberOfQRCodesLot(lot);
      }

      return "qrcode deleted successfully";
    } catch (error) {
      throw new AppError('Error deleting qrcode', 500)
    }
  }

  private async handleNumberOfQRCodesLot(lot: Lots): Promise<void>{
    const { numberOfQRCodes } = lot;
    lot.numberOfQRCodes = numberOfQRCodes - 1;
    if(lot.numberOfQRCodes === 0) {
      const deleteLotService = new DeleteLotService(this.lotsRepository);
      await deleteLotService.run(lot.id);
    }else{
      await this.lotsRepository.update(lot)
    }
  }
}
