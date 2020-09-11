import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import {injectable, inject} from 'tsyringe'
import IQRCodesRepository from '../IRepositories/IQRCodesRepository'

@injectable()
export default class CreateDeactivatedQRCodesService {
  constructor(
    @inject('QRCodeRepository')
    private qrcodeRepository: IQRCodesRepository
  ){}

  public async run(): Promise<QRCode> {
    const newDeactivatedQRCode = await this.qrcodeRepository.create()

    return newDeactivatedQRCode
  }
}
