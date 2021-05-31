import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import { injectable, inject } from 'tsyringe'
import IQRCodesRepository from '../IRepositories/IQRCodesRepository'

@injectable()
export default class CreateDeactivatedQRCodesService {
  constructor(
    @inject('QRCodeRepository')
    private qrcodeRepository: IQRCodesRepository
  ) { }

  public async run(numberOfQrCodes: number | null): Promise<QRCode[]> {
    numberOfQrCodes = numberOfQrCodes || 1
    if (numberOfQrCodes > 100 || numberOfQrCodes < 1)
      throw new Error("You can only generate 100 deactivated QR Codes at once")

    const newDeactivatedQRCodes = []
    for (let i = 0; i < numberOfQrCodes; i++) {
      newDeactivatedQRCodes.push(await this.qrcodeRepository.create())
    }

    return newDeactivatedQRCodes
  }
}
