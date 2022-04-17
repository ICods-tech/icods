import { Request, Response } from 'express'
import { container } from 'tsyringe'
import DeleteQRCodeService from '../services/DeleteQRCodeService';

export default class DeleteQRCodeController {
  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const deleteQRCodeService = container.resolve(DeleteQRCodeService)

      await deleteQRCodeService.run(id)

      return response.json({ message: "qrcode deleted successfully" });
    } catch (err: any) {
      return response.status(err.statusCode).json(err.message)
    }
  }
}
