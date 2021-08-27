import fs from 'fs'
import { container } from 'tsyringe';
import { Request, Response } from 'express';
import GetDeactivatedQRCodeService from '@modules/QRCodes/services/GetDeactivatedQRCodesService'
import CreateDeactivatedQRCodeService from '@modules/QRCodes/services/CreateDeactivatedQRCodeService'

export default class DeactivatedQRCodeController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const numberOfQrCodes = parseInt(request.query.numberOfQrCodes as string) || 1
      const getDeactivatedQRCode = container.resolve(GetDeactivatedQRCodeService)

      const qrCodes = await getDeactivatedQRCode.run(numberOfQrCodes)

      return response.json(qrCodes)
    } catch (err) {
      console.log(err)
      return response.status(400).json(err.message)
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const numberOfQrCodes = request.body?.numberOfQrCodes || null
      const createDeactivatedQRCode = container.resolve(CreateDeactivatedQRCodeService)

      let { qrcodes, generatedPdf } = await createDeactivatedQRCode.run(numberOfQrCodes)
      let pdf = generatedPdf as any
      const pdfData = fs.readFileSync(pdf.filename)
      response.contentType('application/pdf')

      return response.send(pdfData)
    } catch (err) {
      console.log(err)
      return response.status(400).json(err.message)
    }
  }
}
