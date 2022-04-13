import AppError from 'src/infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import IClientsRepository from '../interfaces/IClientsRepository'
import ILotsRepository from '../interfaces/ILotsRepository'
import Lots from '../typeorm/models/lots'

@injectable()
export default class GetAllLotsFromClientService {

  constructor(
    @inject('LotsRepository')
    private lotsRepository: ILotsRepository,
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async run(clientId: string): Promise<Lots[] | undefined> {

    const client = await this.clientsRepository.findById(clientId)

    if (!client) {
      throw new AppError('Client not found')
    }

    return await this.lotsRepository.findByClientId(clientId)
  }

}
