import { Request, Response } from 'express'
import { container } from 'tsyringe'
import SignUpService from '@modules/Users/services/user/SignUpService'
import { classToClass } from 'class-transformer'

export default class SignUpController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body

      const signUp = container.resolve(SignUpService)

      const user = await signUp.run({
        name,
        email,
        password,
        visibility: true
      })

      return response.json(classToClass(user))
    } catch (err) {
      console.log(err)
      return response.status(400).json(err.message)
    }
  }
}
