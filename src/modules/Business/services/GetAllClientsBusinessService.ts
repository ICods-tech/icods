import AppError from 'src/infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import IBusinessRepository from '../interfaces/IBusinessRepository'
import Client from '../typeorm/models/clients'

@injectable()
export default class GetAllClientsBusinessService {

  constructor(
    @inject('BusinessRepository')
    private businessRepository: IBusinessRepository,
  ) {}

  public async run(businessId: string): Promise<{ clients: Client[] | undefined }> {
    const business = await this.businessRepository.findById(businessId)

    if (!business) {
      throw new AppError('Business not found')
    }

    const clients = await this.businessRepository.getAllBusinessClients(businessId);

    return { clients }
  }
}
