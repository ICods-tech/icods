import { classToClass } from 'class-transformer';
import { Request, Response } from 'express'
import SignInService from '@modules/Users/services/SignInService'
import {container} from 'tsyringe'

export default class AddQRCodeToUserController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      // const { qrcode_id, id } = request.body

      // const signInService = container.resolve(SignInService)

      // const { user, token } = await signInService.run(
      //   email,
      //   password
      // )

      // return response.json({...classToClass(user),  auth: true, token });
      return response.json({ message: 'Oi' })
    } catch(err) {
      return response.status(400).json(err.message)
    }
  }
}
