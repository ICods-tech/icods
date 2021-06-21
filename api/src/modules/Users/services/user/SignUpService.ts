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
  ) { }

  public async run({ name, username, email, password, visibility }: IUserDTO): Promise<User> {
    const errors = []
    const checkEmail = await this.usersRepository.findByEmail(email) && errors.push(new AppError('Usuário com esse Email já existe'))
    const checkUsername = await this.usersRepository.findByUsername(username) && errors.push(new AppError('Usuário com esse Username já existe'))

    if (checkEmail || checkUsername) {
      throw errors
    } 

    const hashedPassword = await this.hashProvider.encrypt(password)
    const user = await this.usersRepository.create({
      name,
      username,
      email,
      password: hashedPassword,
      visibility
    })
    return user
  }
}
