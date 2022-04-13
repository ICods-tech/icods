import { checkFieldErrors } from "@shared/utils/checkFieldErrors";
import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import GetAllClientsBusinessService from "../services/GetAllClientsBusinessService";
const logger = require("../../../infra/middlewares/Logger");

export default class GetAllClientsController {

  async run(request : Request, response: Response):Promise<Response> {
    try {
      checkFieldErrors(request);
      const { business } = request;

      const getAllBusisinessService = container.resolve(GetAllClientsBusinessService);

      const { clients } = await getAllBusisinessService.run(business.id);

      return response.json(classToClass(clients));
    } catch (err: any) {
      logger.log(err);
      return response.status(400).json(err.message);
    }

  }
}
