import { classToClass } from 'class-transformer';
import { Request, Response } from 'express'
import SignInService from '@modules/Users/services/SignInService'
import {container} from 'tsyringe'

export default class SignInController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body

      const signInService = container.resolve(SignInService)
      console.log(email, password)
      const { user, token } = await signInService.run(
        email,
        password
      )
      console.log("Batman")

      return response.json({...classToClass(user),  auth: true, token });

    } catch(err) {
      console.log(err.message)
      return response.status(400).json(err.message)
    }
  }
}
