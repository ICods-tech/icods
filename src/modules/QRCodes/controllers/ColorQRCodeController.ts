import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ChangeQRCodeColorService from '@modules/QRCodes/services/ChangeQRCodeColorService'
const logger = require("../../../infra/middlewares/Logger");

export default class ColorQRCodeController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { qrcode_id } = request.params
      const { color } = request.body

      const changeQRCodeColorService = container.resolve(ChangeQRCodeColorService)
      const qrCode = await changeQRCodeColorService.run(id, qrcode_id, color)

      return response.json(qrCode)
    } catch (err: any) {
      logger.log(err)
      return response.status(400).json(err.message)
    }
  }
}
