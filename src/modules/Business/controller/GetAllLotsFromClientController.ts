import { checkFieldErrors } from '../../../shared/utils/checkFieldErrors';
import { Request, Response } from "express";
import { container } from "tsyringe";
import GetAllLotsService from "../services/GetAllLotsService";
const logger = require("../../../infra/middlewares/Logger");


export default class GetAllLotsFromClientController {

  async run(request : Request, response: Response):Promise<Response> {
    try {
      checkFieldErrors(request);

      const { clientId } = request.params
      const getAllLotsService = container.resolve(GetAllLotsService);

      const lots = await getAllLotsService.run(clientId);

      return response.json(lots);
    } catch (err: any) {
      logger.log(err);
      return response.status(400).json(err.message);
    }

  }
}
