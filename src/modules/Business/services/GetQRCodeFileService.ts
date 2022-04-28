var QRCodeHandler = require('qrcode')
import QRCode from '../../QRCodes/typeorm/models/QRCode';
import { injectable } from 'tsyringe';
var pdfGenerator = require('../../../shared/utils/generateQRCodesPdf');

@injectable()
export default class GetQRCodeFileService {

  public async run(qrcodes: QRCode[]): Promise<{ generatedPdf: object }> {

    const qrcodesImagesList = []

    for (let i = 0; i < qrcodes.length; i++) {
      const qrcodeDeeplink = `https://icodsmobile.page.link/?link=https://icods.com.br?id=${qrcodes[i].id}&apn=com.icodsmobile`;

      qrcodesImagesList.push({
        id: qrcodeDeeplink,
        qrcodeDataUrl: await QRCodeHandler.toDataURL(qrcodeDeeplink)
      })
    }

    const generatedPdf = await pdfGenerator.generateQrcodesPdf(qrcodesImagesList)

    return {
      generatedPdf
    }
  }
}
