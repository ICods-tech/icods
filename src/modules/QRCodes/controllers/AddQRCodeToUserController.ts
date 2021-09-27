import { Request, Response } from 'express'
import AddQRCodeToUserService from '@modules/QRCodes/services/AddQRCodeToUserService'
import {container} from 'tsyringe'

export default class AddQRCodeToUserController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { qrcode_id } = request.body

      const addQRCodeToUserService = container.resolve(AddQRCodeToUserService)

      const qrcodes = await addQRCodeToUserService.run(
        qrcode_id,
        id
      )

      return response.json(qrcodes)
    } catch(err: any) {
      return response.status(400).json(err.message)
    }
  }
}
