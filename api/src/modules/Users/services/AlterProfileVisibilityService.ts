import AppError from '@shared/error/AppError'
import User from '@modules/Users/infra/typeorm/models/user'
import IUserDTO from '@modules/Users/DTOs/IUserDTO'
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
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
