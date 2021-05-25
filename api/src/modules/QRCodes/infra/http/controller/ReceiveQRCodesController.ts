import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ReceiveQRCodeService from '@modules/QRCodes/services/ReceiveQRCodeService'
import FilterReceivedQRCodesService from '@modules/QRCodes/services/FilterReceivedQRCodesService';
import { Colors } from '@modules/QRCodes/interfaces/Colors';

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
      const favorited = (!!(request.query.favorite)) || false
      const color = (request.query.color || 'noFilter') as Colors | 'noFilter'
      const month = request.query.month ? parseInt(request.query.month as string) : null
      const year = request.query.year ? parseInt(request.query.year as string) : null

      const filterReceivedQRCodesService = container.resolve(FilterReceivedQRCodesService)
      const filteredQRCodes = await filterReceivedQRCodesService.run({ id, color, favorited, month, year })

      return response.json(filteredQRCodes)
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }
}
