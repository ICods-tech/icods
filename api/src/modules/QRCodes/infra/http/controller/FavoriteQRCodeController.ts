import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ChangeFavoriteStatusService from '@modules/QRCodes/services/ChangeFavoriteStatusService'

export default class FavoriteQRCodeController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { qrcodeId } = request.params

      const changeFavoriteStatusService = container.resolve(ChangeFavoriteStatusService)
      const qrCode = await changeFavoriteStatusService.run(id, qrcodeId)

      return response.json(qrCode)
    } catch (err) {
      console.log(err)
      return response.status(400).json(err.message)
    }
  }
}
