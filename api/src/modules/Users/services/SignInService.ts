import AppError from '@shared/error/AppError'
import User from '@modules/Users/infra/typeorm/models/user'
import IUserDTO from '@modules/Users/DTOs/IUserDTO'
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import IHashProvider from '@modules/Users/providers/hashProvider/model/IHashProvider'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class SignInService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async run(email: string, password: string): Promise<User> {

    if (!email || !password ) {
      throw new AppError('All fields must be filled')
    }

    const user = await this.usersRepository.findByEmail(email)

    if(!user) {
      throw new AppError('User with this email does not exist')
    }

    const passwordValidation = await this.hashProvider.compareHash(password, user.password)

    if(!passwordValidation) {
      throw new AppError('User password is incorrect')
    }

    return user
  }
}
