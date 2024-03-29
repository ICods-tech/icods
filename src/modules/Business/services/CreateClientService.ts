import { inject, injectable } from 'tsyringe'
import AppError from '../../../infra/error/AppError'
import IBusinessRepository from '../interfaces/IBusinessRepository'
import IClient from '../interfaces/IClient'
import IClientsRepository from '../interfaces/IClientsRepository'
import Client from '../typeorm/models/clients'

@injectable()
export default class CreateClientService {

  constructor(
    @inject('BusinessRepository')
    private businessRepository: IBusinessRepository,

    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}

  public async run(businessId: string, {name, email, phone}: IClient): Promise<Client> {
    const business = await this.businessRepository.findById(businessId)

    if (!business) {
      throw new AppError('Business not found')
    }

    const clientByName= await this.clientsRepository.findByName(name)
    const clientByEmail = await this.clientsRepository.findByEmail(email)
    if (clientByEmail || clientByName) {
      throw new AppError({ errors: [{ msg: "Cliente já cadastrado!"} as any] })
    }

    return await this.clientsRepository.createClient({
      name,
      email,
      phone,
      business
    })

  }
}
