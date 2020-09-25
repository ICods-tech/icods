import User from '@modules/Users/infra/typeorm/models/user';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express'
import ResetPasswordService from '@modules/Users/services/resetPasswordService'
import {container} from 'tsyringe'

export default class ResetPasswordController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const {
        old_password,
        password,
        password_confirmation
      } = request.body
      const { id } = request.user

      const resetPasswordService = container.resolve(ResetPasswordService)

      const updatedUser = await resetPasswordService.run(
        id,
        old_password,
        password,
        password_confirmation
      )

      return response.json(classToClass(updatedUser))
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }
}
