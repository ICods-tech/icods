import IHashProvider from '@modules/Users/providers/hashProvider/model/IHashProvider'
import jwt from 'jsonwebtoken'
import AppError from 'src/infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import IBusiness from '../interfaces/IBusiness'
import IBusinessRepository from '../interfaces/IBusinessRepository'
import IClientsRepository from '../interfaces/IClientsRepository'
import Client from '@modules/Business/typeorm/models/clients'
import IClient from '@modules/Business/interfaces/IClients'

@injectable()
export default class CreateClientService {

  constructor(
    @inject('BusinessRepository')
    private businessRepository: IBusinessRepository,

    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}

  public async run(businessId: string, {name, email, phone}: IClient): Promise<{ client: Client }> {
    const business = await this.businessRepository.findById(businessId!)

    if (!business) {
      throw new AppError('Business not found')
    }

    const client = await this.clientsRepository.createClient({
      name,
      email,
      phone,
      business
    })

    return { client }
  }
}
