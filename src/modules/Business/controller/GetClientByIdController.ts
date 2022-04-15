import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { checkFieldErrors } from '../../../shared/utils/checkFieldErrors';
import GetClientByIdService from '../services/GetClientByIdService';
const logger = require("../../../infra/middlewares/Logger");

export default class GetClientByIdController {

  async run(request : Request, response: Response):Promise<Response> {
    try {
      checkFieldErrors(request);
      const { id } = request.params
      const getClientByIdService = container.resolve(GetClientByIdService);

      const client = await getClientByIdService.run(id);

      return response.json(classToClass(client));
    } catch (err: any) {
      logger.log(err);
      return response.status(400).json(err.message);
    }

  }
}
