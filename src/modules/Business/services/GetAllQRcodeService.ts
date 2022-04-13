import QRCode from '@modules/QRCodes/typeorm/models/QRCode'
import AppError from 'src/infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import ILotsRepository from '../interfaces/ILotsRepository'

@injectable()
export default class GetAllQRCodesLotService {

  constructor(
    @inject('LotsRepository')
    private lotsRepository: ILotsRepository,
  ) {}

  public async run(lotId: string): Promise<QRCode[] | [] | undefined> {

    const lots = await this.lotsRepository.findById(lotId)

    if (!lots ) {
      throw new AppError('Lot not found', 404)
    }

    const qrcodes = await this.lotsRepository.getAllQRCodesByLot(lotId)

    return qrcodes;
  }
}