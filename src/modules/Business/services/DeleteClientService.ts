import IQRCodesRepository from '../../QRCodes/interfaces/IQRCodesRepository'
import { inject, injectable } from 'tsyringe'
import AppError from '../../../infra/error/AppError'
import ILotsRepository from '../interfaces/ILotsRepository'
import IClientsRepository from '../interfaces/IClientsRepository'

@injectable()
export default class DeleteClientService {

  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) { }

  public async run(id: string): Promise<string> {
    const client = await this.clientsRepository.findById(id)

    if (!client) {
      throw new AppError('Client not found', 404)
    }
    try {
      await this.clientsRepository.delete(id)
      return "Client deleted successfully";
    } catch (error) {
      throw new AppError('Error deleting client', 500)
    }
  }
}
