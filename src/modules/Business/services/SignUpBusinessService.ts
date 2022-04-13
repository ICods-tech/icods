import 'dotenv/config';
import AppError from 'src/infra/error/AppError';
import { inject, injectable } from 'tsyringe';
import IHashProvider from '../../Users/providers/hashProvider/model/IHashProvider';
import IBusiness from '../interfaces/IBusiness';
import IBusinessRepository from '../interfaces/IBusinessRepository';
import Business from '../typeorm/models/business';

@injectable()
export default class SignUpService {

  constructor(
    @inject('BusinessRepository')
    private businessRepository: IBusinessRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) { }

  public async run({ companyName, email, password }: IBusiness): Promise<Business> {
    const errors = []
    const checkEmail = await this.businessRepository.findByEmail(email) && errors.push(new AppError('Empresa com esse Email já existe'))

    if (checkEmail) throw errors

    const hashedPassword = await this.hashProvider.encrypt(password)

    const business = await this.businessRepository.createBusiness({
      companyName,
      email,
      password: hashedPassword,
    })

    return business
  }
}
