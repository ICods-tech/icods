import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateDeactivatedQRCodeService from '@modules/QRCodes/services/CreateDeactivatedQRCodeService'

export default class CreateQRCodeController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const numberOfQrCodes = request.body?.numberOfQrCodes || null
      const createDeactivatedQRCode = container.resolve(CreateDeactivatedQRCodeService)

      const qrCode = await createDeactivatedQRCode.run(numberOfQrCodes)

      return response.json(qrCode)
    } catch (err) {
      console.log(err)
      return response.status(400).json(err.message)
    }
  }
}
