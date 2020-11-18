import { Request, Response } from 'express'
import GetUserQRCodesService from '@modules/QRCodes/services/GetUserQRCodesService'
import GetUserQRCodeService from '@modules/QRCodes/services/GetUserQRCodeService'
import AddQRCodeContentService from '@modules/QRCodes/services/AddQRCodeContentService'
import { container } from 'tsyringe'

export default class UserQRCodesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.user.id
      const getUserQRCodesService = container.resolve(GetUserQRCodesService)
      const qrcodes = await getUserQRCodesService.run(
        user_id
      )

      return response.json(qrcodes)
    } catch(err) {
      return response.status(400).json(err.message)
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { qrcode_id } = request.params
      const getUserQRCodeService = container.resolve(GetUserQRCodeService)
      const qrcode = await getUserQRCodeService.run(
        qrcode_id
      )

      return response.json(qrcode)
    } catch(err) {
      return response.status(400).json(err.message)
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { qrcode_id } = request.params
      const contentFilename = request.file.filename

      const addQRCodeContentService = container.resolve(AddQRCodeContentService)

      const qrcode = await addQRCodeContentService.run(
        qrcode_id,
        contentFilename
      )

      return response.json(qrcode)
    } catch(err) {
      return response.status(400).json(err.message)
    }
  }
}
