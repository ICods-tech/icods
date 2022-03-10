import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { classToClass } from 'class-transformer'
import SignUpService from '@modules/Business/services/SignUpBusinessService'
import { checkUserSignUpFieldErrors } from '../../../shared/utils/checkUserSignUpFieldErrors'
const logger = require("../../../infra/middlewares/Logger");

export default class SignUpBusinessController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {

      checkUserSignUpFieldErrors(request)
      const { companyName, email, password } = request.body

      const signUp = container.resolve(SignUpService)

      const business = await signUp.run({
        companyName,
        email,
        password,
      })

      return response.json(classToClass(business))
    } catch (err) {
      logger.log(err)
      return response.status(400).json(err)
    }
  }
}
