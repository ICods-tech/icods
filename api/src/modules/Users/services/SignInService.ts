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

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async run(email: string, password: string): Promise<{ user: User, token: string }> {
     console.log("Aqui anteriormente 0")
    if (!email || !password ) {
      throw new AppError('All fields must be filled')
    }

    console.log('adas')
    const user = await this.usersRepository.findByEmail(email)
    console.log(user)

    if(!user) {
      throw new AppError('User with this email does not exist')
    }


    const passwordValidation  = await this.hashProvider.compareHash(password, user.password)
    console.log(passwordValidation)

    if(!passwordValidation) {
      throw new AppError('User password is incorrect')
    }

    const { id } = user

    console.log(process.env.SECRET)

    const token = jwt.sign({ id }, process.env.SECRET as string, {
      expiresIn: 3600
    });



    return { user, token }
  }
}
