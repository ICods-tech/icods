import AppError from '../../../infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import IBusinessRepository from '../interfaces/IBusinessRepository'
import IClient from '../interfaces/IClient'
import IClientsRepository from '../interfaces/IClientsRepository'
import Client from '../typeorm/models/clients'

@injectable()
export default class GetClientByIdService {

  constructor(
    @inject('BusinessRepository')
    private businessRepository: IBusinessRepository,

    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}

  public async run(id: string): Promise<Client | undefined> {
    return await this.clientsRepository.findById(id)
  }
}
