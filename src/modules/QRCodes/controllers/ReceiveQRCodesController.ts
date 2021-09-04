import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ReceiveQRCodeService from '@modules/QRCodes/services/ReceiveQRCodeService'
import FilterReceivedQRCodesService from '@modules/QRCodes/services/FilterReceivedQRCodesService';
import { IColors } from '@modules/QRCodes/interfaces/IColors';

export default class ReceiveQRCodeController {
  public booleanFavoriteConversion(query: string) {
    return query === "true" ? true : false;
  }

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
      const favorited = request.query.favorite === "true" ? true : false
      const color = (request.query.color || 'noFilter') as IColors | 'noFilter'
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
