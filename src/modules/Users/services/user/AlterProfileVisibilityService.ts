import AppError from '../../../../infra/error/AppError'
import User from '@modules/Users/typeorm/models/user'
import IUser from '@modules/Users/interfaces/IUser'
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import IHashProvider from '@modules/Users/providers/hashProvider/model/IHashProvider'
import { inject, injectable } from 'tsyringe'
import jwt from 'jsonwebtoken'
import { request } from 'express'

@injectable()
export default class SignInService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) { }

  public async run(id: string): Promise<User> {

    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new AppError('User does not exist')
    }
    Object.assign(user, { visibility: !user.visibility })

    this.usersRepository.save(user)

    return user
  }
}
