import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'
import SignUpService from '@modules/Users/services/user/SignUpService'
import { checkUserSignUpFieldErrors } from '@modules/Users/utils/checkUserSignUpFieldErrors'

export default class SignUpController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      checkUserSignUpFieldErrors(request)
      const { name, username, email, password } = request.body

      const signUp = container.resolve(SignUpService)

      const user = await signUp.run({
        name,
        username,
        email,
        password,
        visibility: true
      })

      return response.json(classToClass(user))
    } catch (err) {
      console.log(err)
      return response.status(400).json(err)
    }
  }
}
