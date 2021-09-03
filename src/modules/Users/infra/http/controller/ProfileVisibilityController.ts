import User from '@modules/Users/infra/typeorm/models/user';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import AlterProfileVisibilityService from '@modules/Users/services/user/AlterProfileVisibilityService';

export default class ProfileController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user

      const resetPasswordService = container.resolve(AlterProfileVisibilityService)

      const updatedUser = await resetPasswordService.run(
        id
      )

      return response.json(classToClass(updatedUser))
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }
}
