import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import AppError from '@shared/error/AppError';
import { injectable, inject } from 'tsyringe'
import IQRCodesRepository from '../IRepositories/IQRCodesRepository'

@injectable()
export default class GetDeactivatedQRCodesService {
  constructor(
    @inject('QRCodeRepository')
    private qrcodeRepository: IQRCodesRepository
  ) { }

  public async run(numberOfQrCodes: number | null): Promise<QRCode[]> {
    numberOfQrCodes = numberOfQrCodes || 1

    if (numberOfQrCodes < 1)
      throw new AppError("You cannot retrieve a negative number of QR Codes")

    const deactivatedQRCodes = await this.qrcodeRepository.getMultipleDeactivatedQRCodes(numberOfQrCodes)

    return deactivatedQRCodes
  }
}
