import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeleteClientService from '../services/DeleteClientService';

export default class DeleteClientController {
  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const deleteClientService = container.resolve(DeleteClientService)

      await deleteClientService.run(id)

      return response.json({ message: "Client deleted successfully" });
    } catch (err: any) {
      return response.status(err.statusCode).json(err.message)
    }
  }
}
