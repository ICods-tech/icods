import { classToClass } from 'class-transformer';
import { Request, Response } from 'express'
import SignInService from '@modules/Users/services/SignInService'
import {container} from 'tsyringe'

export default class SignInController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body

      const signInService = container.resolve(SignInService)

      const { user, token } = await signInService.run(
        email,
        password
      )

      return response.json({...classToClass(user),  auth: true, token });

    } catch(err) {
      return response.status(400).json(err.message)
    }
  }
}
