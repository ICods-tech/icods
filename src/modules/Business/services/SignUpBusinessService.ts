import 'dotenv/config'
import { injectable, inject } from 'tsyringe'
import IHashProvider from '@modules/Users/providers/hashProvider/model/IHashProvider'
import IBusinessRepository from '../interfaces/IBusinessRepository';
import IBusiness from '../interfaces/IBusiness';
import Business from '../typeorm/models/business';
import AppError from 'src/infra/error/AppError';

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
