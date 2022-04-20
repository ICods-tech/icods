var QRCodeHandler = require('qrcode')
import { injectable, inject } from 'tsyringe'
var pdfGenerator = require('../../../shared/utils/generateQRCodesPdf');
import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import IQRCodesRepository from '../../QRCodes/interfaces/IQRCodesRepository';
import AppError from '../../../infra/error/AppError';
import IClientsRepository from '@modules/Business/interfaces/IClientsRepository';
import ILotsRepository from '@modules/Business/interfaces/ILotsRepository';

@injectable()
export default class CreateDeactivatedQRCodesService {
  private maxQrCodeSize = Number(process.env.MAX_SIZE_GENERATE_QRCODES)

  constructor(
    @inject('QRCodeRepository')
    private qrcodeRepository: IQRCodesRepository,

    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,

    @inject('LotsRepository')
    private lotsRepository: ILotsRepository,
  ) { }

  public async run(clientId: string, numberOfQrCodes: number | null): Promise<{ qrcodes: QRCode[], generatedPdf: object }> {
    numberOfQrCodes = numberOfQrCodes || 1

    if (numberOfQrCodes > this.maxQrCodeSize || numberOfQrCodes < 1)
      throw new AppError(`You can only generate ${this.maxQrCodeSize} deactivated QR Codes at once`)

    const client = await this.clientsRepository.findById(clientId)

    if (!client) {
      throw new AppError('Client not found', 404)
    }

    const newDeactivatedQRCodes = []
    const qrcodesImagesList = []

    const lot = await this.lotsRepository.create(client)
    for (let i = 0; i < numberOfQrCodes; i++) {
      let newQrCode = await this.qrcodeRepository.create(lot)
      newDeactivatedQRCodes.push(newQrCode)
      const qrcodeDeeplink = `https://icodsmobile.page.link/?link=https://icods.com.br?id=${newQrCode.id}&apn=com.icodsmobile`;

      qrcodesImagesList.push({
        id: qrcodeDeeplink,
        qrcodeDataUrl: await QRCodeHandler.toDataURL(qrcodeDeeplink)
      })
    }

    lot.numberOfQRCodes = numberOfQrCodes

    await this.lotsRepository.update(lot)


    const generatedPdf = await pdfGenerator.generateQrcodesPdf(qrcodesImagesList)

    return {
      qrcodes: newDeactivatedQRCodes,
      generatedPdf
    }
  }
}
