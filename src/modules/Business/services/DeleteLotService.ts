import AppError from '../../../infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import ILotsRepository from '../interfaces/ILotsRepository'

@injectable()
export default class DeleteLotService {

  constructor(
    @inject('LotsRepository')
    private lotsRepository: ILotsRepository,
  ) {}

  public async run(id: string): Promise<string> {
    const lot = await this.lotsRepository.findById(id)

    if (!lot) {
      throw new AppError('Lot not found', 404)
    }
    try {
      await this.lotsRepository.delete(id)

    } catch (error) {
      throw new AppError('Error deleting lot', 500)
    }
    return "lot deleted successfully";
  }

}
