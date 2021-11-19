import AppError from '../../../../infra/error/AppError'
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class DeleteUserService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async run(id: string): Promise<string> {

    let user = await this.usersRepository.findById(id)

    if (!user) {
      throw new AppError('User not found', 404)
    }

    try {
      await this.usersRepository.deleteUser(id)
    } catch (error) {
      throw new AppError('Error deleting user', 500)
    }

    return 'User Deleted'
  }
}
