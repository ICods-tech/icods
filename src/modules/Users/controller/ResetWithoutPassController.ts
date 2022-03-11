import { classToClass } from 'class-transformer';
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import ResetPasswordWithoutPassService from '../services/user/ResetPasswordWithoutPassService';
import { checkFieldErrors } from '../../../shared/utils/checkFieldErrors';

export default class ResetPasswordWithoutPassController {
  public async sendMailRecovery(request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.body

      const resetPasswordWithoutPassService = container.resolve(ResetPasswordWithoutPassService)

      const updatedUser = await resetPasswordWithoutPassService.sendMailRecovery(email)

      return response.json(classToClass(updatedUser))
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }

  public async run(request: Request, response: Response): Promise<Response> {
    try {
      checkFieldErrors(request)
      const {email, tempPassword, newPassword} = request.body

      const resetPasswordWithoutPassService = container.resolve(ResetPasswordWithoutPassService)

      const updatedUser = await resetPasswordWithoutPassService.run(email, tempPassword,newPassword)

      return response.json(classToClass(updatedUser))
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
