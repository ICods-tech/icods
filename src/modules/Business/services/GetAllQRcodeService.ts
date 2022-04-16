import AppError from '../../../infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import QRCode from '../../QRCodes/typeorm/models/QRCode'
import ILotsRepository from '../interfaces/ILotsRepository'

@injectable()
export default class GetAllQRCodesLotService {

  constructor(
    @inject('LotsRepository')
    private lotsRepository: ILotsRepository,
  ) {}

  public async run(lotId: string): Promise<QRCode[]> {

    const lots = await this.lotsRepository.findById(lotId)

    if (!lots ) {
      throw new AppError('Lot not found', 404)
    }

    const qrcodes = await this.lotsRepository.getAllQRCodesByLot(lotId)
    if(!qrcodes) {
      throw new AppError('QRCodes not found', 404)
    }

    return qrcodes;
  }
}
