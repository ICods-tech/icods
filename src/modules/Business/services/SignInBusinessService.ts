import User from '@modules/Users/typeorm/models/user'
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import IHashProvider from '@modules/Users/providers/hashProvider/model/IHashProvider'
import { inject, injectable } from 'tsyringe'
import jwt from 'jsonwebtoken'
import IBusinessRepository from '../interfaces/IBusinessRepository'
import AppError from 'src/infra/error/AppError'
import IBusiness from '../interfaces/IBusiness'

@injectable()
export default class SignInBusinessService {

  constructor(
    @inject('BusinessRepository')
    private businessRepository: IBusinessRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async run(email: string, password: string): Promise<{ business: IBusiness, token: string }> {

    let business = await this.businessRepository.findByEmail(email)

    if (!business) {
      throw new AppError('Empresa com esse email não existe')
    }

    const passwordValidation  = await this.hashProvider.compareHash(password, business.password)

    if(!passwordValidation) {
      throw new AppError('Business password is incorrect')
    }

    const { id } = business

    const token = jwt.sign({ id }, process.env.BUSINESS_SECRET as string, {
      subject: id,
      expiresIn: "24h"
    });

    return { business, token }
  }
}
