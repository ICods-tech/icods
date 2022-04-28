import jwt from 'jsonwebtoken'
import AppError from '../../../infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import IHashProvider from '../../Users/providers/hashProvider/model/IHashProvider'
import IBusiness from '../interfaces/IBusiness'
import IBusinessRepository from '../interfaces/IBusinessRepository'

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
      throw new AppError({ errors: [{ msg: "Empresa com esse email não existe!"} as any] })
    }

    const passwordValidation  = await this.hashProvider.compareHash(password, business.password)

    if(!passwordValidation) {
      throw new AppError({ errors: [{ msg: "Senha incorreta!"} as any] })
    }

    const { id } = business

    const token = jwt.sign({ id }, process.env.BUSINESS_SECRET as string, {
      subject: id,
      expiresIn: "24h"
    });

    return { business, token }
  }
}
