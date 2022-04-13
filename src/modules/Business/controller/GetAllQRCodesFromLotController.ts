import { checkFieldErrors } from '../../../shared/utils/checkFieldErrors';
import { Request, Response } from "express";
import { container } from "tsyringe";
import GetAllQRCodesLotService from "../services/GetAllQRcodeService";
const logger = require("../../../infra/middlewares/Logger");


export default class GetAllQRCodesFromLotController {

  async run(request : Request, response: Response):Promise<Response> {
    try {
      checkFieldErrors(request);

      const { lotId } = request.params

      const getAllQRCodesLotService = container.resolve(GetAllQRCodesLotService);

      const qrcodes = await getAllQRCodesLotService.run(lotId);

      return response.json(qrcodes);
    } catch (err: any) {
      logger.log(err);
      return response.status(400).json(err.message);
    }

  }
}
