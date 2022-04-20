import { Request, Response } from 'express'
import { container } from 'tsyringe'
import DeleteLotService from '../services/DeleteLotService';

export default class DeleteLotController {
  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const deleteLotService = container.resolve(DeleteLotService)

      await deleteLotService.run(id)

      return response.json({ message: "lot deleted successfully" });
    } catch (err: any) {
      return response.status(err.statusCode).json(err.message)
    }
  }
}
