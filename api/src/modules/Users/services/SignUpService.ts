import AppError from '@shared/error/AppError';
import User from '@modules/Users/infra/typeorm/models/user';
import { injectable, inject } from 'tsyringe'
import IUserDTO from '@modules/Users/DTOs/IUserDTO'
import IUsersRepository from '@modules/Users/IRepositories/IUserRepository'
import IHashProvider from '@modules/Users/providers/hashProvider/model/IHashProvider'

@injectable()
export default class SignUpService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async run({ name, email, password }: IUserDTO): Promise<User> {

    if (!name || !email || !password ) {
      throw new AppError('All fields must be filled')
    }

    const checkEmail = await this.usersRepository.findByEmail(email)

    if(checkEmail) {
      throw new AppError('User with this email already exists')
    }

    const hashedPassword = await this.hashProvider.encrypt(password)
    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword
    })
    console.log('xau')
    return user
  }
}
