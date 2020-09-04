import { Request, Response } from 'express'
import { container } from 'tsyringe'
import SignUpService from '@modules/Users/infra/typeorm/services/SignUpService'

export default class SignUpController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const {name, email, password } = request.body
      console.log('pica')
      const signUp = container.resolve(SignUpService)
      console.log('pal')
      const user = await signUp.run({
        name,
        email,
        password
      })

      return response.json(user)

    } catch (err) {
      return response.status(400).json(err)
    }
  }
}
