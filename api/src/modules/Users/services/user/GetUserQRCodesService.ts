import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IUserRepository from '@modules/Users/IRepositories/IUserRepository';
import AppError from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe'

@injectable()
export default class GetUserQRCodesService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) { }

  public async run(user_id: string): Promise<QRCode[] | []> {
    const allUserQRCodes = await this.usersRepository.findAllUserQRCodes(user_id)
    if (allUserQRCodes === undefined) throw new AppError('User with this ID could not be found!')

    return allUserQRCodes

  }
}