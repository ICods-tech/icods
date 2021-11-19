import { classToClass } from 'class-transformer';
import { Request, Response } from 'express'
import SignInService from '@modules/Users/services/user/DeleteUserService'
import { container } from 'tsyringe'

export default class DeleteUserController {
  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const deleteUserService = container.resolve(SignInService)

      await deleteUserService.run(id)

      return response.json({ message: "User deleted successfully" });
    } catch (err: any) {
      return response.status(err.statusCode).json(err.message)
    }
  }
}
