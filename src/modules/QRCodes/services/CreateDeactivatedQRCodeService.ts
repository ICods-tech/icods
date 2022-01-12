var QRCodeHandler = require('qrcode')
import { injectable, inject } from 'tsyringe'
var pdfGenerator = require('../utils/generateQRCodesPdf')
import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import IQRCodesRepository from '../interfaces/IQRCodesRepository'
import AppError from '../../../infra/error/AppError';

@injectable()
export default class CreateDeactivatedQRCodesService {
  constructor(
    @inject('QRCodeRepository')
    private qrcodeRepository: IQRCodesRepository
  ) { }

  public async run(numberOfQrCodes: number | null): Promise<{ qrcodes: QRCode[], generatedPdf: object }> {
    numberOfQrCodes = numberOfQrCodes || 1

    if (numberOfQrCodes > 100 || numberOfQrCodes < 1)
      throw new AppError("You can only generate 100 deactivated QR Codes at once")

    const newDeactivatedQRCodes = []
    const qrcodesImagesList = []

    for (let i = 0; i < numberOfQrCodes; i++) {
      let newQrCode = await this.qrcodeRepository.create()
      newDeactivatedQRCodes.push(newQrCode)
      const qrcodeDeeplink = `icodsMobile://app/scanner/${newQrCode.id}`  
      qrcodesImagesList.push({
        id: qrcodeDeeplink,
        qrcodeDataUrl: await QRCodeHandler.toDataURL(qrcodeDeeplink)
      })
    }

    const generatedPdf = await pdfGenerator.generateQrcodesPdf(qrcodesImagesList)

    return {
      qrcodes: newDeactivatedQRCodes,
      generatedPdf
    }
  }
}
