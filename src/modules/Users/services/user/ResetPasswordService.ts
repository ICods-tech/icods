import AppError from '@shared/error/AppError'
import User from '@modules/Users/infra/typeorm/models/user'
import IUserDTO from '@modules/Users/DTOs/IUserDTO'
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import IHashProvider from '@modules/Users/providers/hashProvider/model/IHashProvider'
import { inject, injectable } from 'tsyringe'
import jwt from 'jsonwebtoken'

@injectable()
export default class ResetPasswordService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async run(
    id: string,
    old_password: string,
    password: string,
    password_confirmation: string): Promise<User> {

      let user = await this.usersRepository.findById(id)

      if (!user) {
        throw new AppError('User does not exist')
      }

      const checkPasswords = await this.hashProvider.compareHash(old_password, user.password)

      if (!checkPasswords) {
        throw new AppError('Old Password does not match')
      }

      if (password !== password_confirmation) {
        throw new AppError('Password confirmation must match new password')
      }

      const new_password = await this.hashProvider.encrypt(password)
      Object.assign(user, { password: new_password })

      this.usersRepository.save(user)

      return user
  }
}
