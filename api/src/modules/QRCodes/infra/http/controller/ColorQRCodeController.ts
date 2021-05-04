import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ChangeQRCodeColorService from '@modules/QRCodes/services/ChangeQRCodeColorService'

export default class ColorQRCodeController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { qrcodeId } = request.params
      const { color } = request.body

      const changeQRCodeColorService = container.resolve(ChangeQRCodeColorService)
      const qrCode = await changeQRCodeColorService.run(id, qrcodeId, color)

      return response.json(qrCode)
    } catch (err) {
      console.log(err)
      return response.status(400).json(err.message)
    }
  }
}
