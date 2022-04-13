import { checkFieldErrors } from '../../../shared/utils/checkFieldErrors';
import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import SignInBusinessService from "../services/SignInBusinessService";
const logger = require("../../../infra/middlewares/Logger");

export default class SignInBusinessController {
    public async  create(request: Request, response: Response): Promise<Response> {
      try {
        checkFieldErrors(request)
        const { email, password } = request.body

        const signInBusinessService = container.resolve(SignInBusinessService)

        const { business, token } = await signInBusinessService.run(
          email,
          password
        )

        return response.json({ business: classToClass(business), token });
      } catch (err: any) {
        console.log('err', err);

        logger.log(err)
        return response.status(400).json(err.message)
      }
    }
}
