import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ReceiveQRCodeService from '@modules/QRCodes/services/ReceiveQRCodeService'
import FilterReceivedQRCodesService from '@modules/QRCodes/services/FilterReceivedQRCodesService';

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

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const favorited = request.body.favorite || false
      const color = request.body.color || 'noFilter'
      const month = request.body.month || null
      const year = request.body.year || null

      const filterReceivedQRCodesService = container.resolve(FilterReceivedQRCodesService)

      const filteredQRCodes = await filterReceivedQRCodesService.run({ id, color, favorited, month, year })

      return response.json(filteredQRCodes)
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }
}
