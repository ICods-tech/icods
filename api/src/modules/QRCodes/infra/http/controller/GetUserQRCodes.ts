import { Request, Response } from 'express'
import GetUserQRCodesService from '@modules/QRCodes/services/GetUserQRCodesService'
import {container} from 'tsyringe'

export default class GetUserQRCodesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params

      const getUserQRCodesService = container.resolve(GetUserQRCodesService)

      const qrcodes = await getUserQRCodesService.run(
        user_id
      )

      return response.json(qrcodes)
    } catch(err) {
      return response.status(400).json(err.message)
    }
  }
}
