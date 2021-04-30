import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ReceiveQRCodeService from '@modules/QRCodes/services/ReceiveQRCodeService'

export default class ReceiveQRCodeController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { qrcode_id } = request.params
      const { id } = request.user

      const receiveQRCodeService = container.resolve(ReceiveQRCodeService)

      const qrCode = await receiveQRCodeService.run(qrcode_id, id)

      return response.json(qrCode)
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }
}
