import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ChangeFavoriteStatusService from '@modules/QRCodes/services/ChangeFavoriteStatusService'
const logger = require("../../../infra/middlewares/Logger");

export default class FavoriteQRCodeController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { qrcode_id } = request.params

      const changeFavoriteStatusService = container.resolve(ChangeFavoriteStatusService)
      const qrCode = await changeFavoriteStatusService.run(id, qrcode_id)

      return response.json(qrCode)
    } catch (err: any) {
      logger.log(err)
      return response.status(400).json(err.message)
    }
  }
}
