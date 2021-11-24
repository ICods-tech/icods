import { classToClass } from 'class-transformer';
import { Request, Response } from 'express'
import SignInService from '@modules/Users/services/user/SignInService'
import { container } from 'tsyringe'
const logger = require("../../../infra/middlewares/Logger");


export default class SignInController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body

      const signInService = container.resolve(SignInService)

      const { user, token } = await signInService.run(
        email,
        password
      )

      return response.json({ user: classToClass(user), token });
    } catch (err: any) {
      logger.error(err.message)
      return response.status(400).json(err.message)
    }
  }
}
