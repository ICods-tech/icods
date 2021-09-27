import AppError from '../../../../infra/error/AppError'
import User from '@modules/Users/typeorm/models/user'
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import IHashProvider from '@modules/Users/providers/hashProvider/model/IHashProvider'
import { inject, injectable } from 'tsyringe'
import jwt from 'jsonwebtoken'

@injectable()
export default class SignInService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async run(emailOrUserName: string, password: string): Promise<{ user: User, token: string }> {

    let user = await this.usersRepository.findByEmail(emailOrUserName)

    if (!user) {
      user = await this.usersRepository.findByUsername(emailOrUserName)
      if (!user) throw new AppError('Usuário com esse Email/Username não existe')
    }

    const passwordValidation  = await this.hashProvider.compareHash(password, user.password)

    if(!passwordValidation) {
      throw new AppError('User password is incorrect')
    }

    const { id } = user

    const token = jwt.sign({ id }, process.env.SECRET as string, {
      subject: id,
      expiresIn: "12h"
    });

    return { user, token }
  }
}
