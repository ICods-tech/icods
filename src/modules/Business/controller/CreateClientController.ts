import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { checkFieldErrors } from '../../../shared/utils/checkFieldErrors';
import IClient from '../interfaces/IClient';
import CreateClientService from '../services/CreateClientService';
const logger = require('../../../infra/middlewares/Logger');

export default class CreateClientController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {

      checkFieldErrors(request);
      const { name, email, phone } = request.body;
      const { business } = request;

      const createClientService = container.resolve(CreateClientService);

      const client: IClient = {
        name,
        email,
        phone,
      }
      const clientCreated = await createClientService.run(business.id, client);

      return response.json(classToClass(clientCreated));
    } catch (err: any) {
      logger.log(err);
      return response.status(400).json(err.message);
    }
  }
}
