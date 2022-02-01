import 'dotenv/config'
import AppError from '../../../../infra/error/AppError';
import User from '@modules/Users/typeorm/models/user';
import { injectable, inject } from 'tsyringe'
import IUser from '@modules/Users/interfaces/IUser'
import IUsersRepository from '@modules/Users/interfaces/IUserRepository'
import IHashProvider from '@modules/Users/providers/hashProvider/model/IHashProvider'
import WelcomeMailService from '../email/WelcomeMailService';
import { sendEmailWithSES } from 'src/infra/middlewares/SES';
const logger = require("../../../../infra/middlewares/Logger");


@injectable()
export default class SignUpService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) { }

  public async run({ name, username, email, password, visibility }: IUser): Promise<User> {
    const errors = []
    const checkEmail = await this.usersRepository.findByEmail(email) && errors.push(new AppError('Usuário com esse Email já existe'))
    const checkUsername = await this.usersRepository.findByUsername(username) && errors.push(new AppError('Usuário com esse Username já existe'))

    if (checkEmail || checkUsername) {
      throw errors
    }

    const hashedPassword = await this.hashProvider.encrypt(password)

    await sendEmailWithSES({
      subject: 'Bem vindo!',
      type: 'welcomeMail',
      recipientEmail: email,
      data: {
        userName: name,
      },
    });
    const mailResponse = await new WelcomeMailService().run({
      signUpName: name,
      signUpEmail: email,
      email: process.env.ICODS_CREDENTIALS_EMAIL || '',
      password: process.env.ICODS_CREDENTIALS_PASSWORD || '',
    })

    if (mailResponse.status !== 200) logger.error(mailResponse.message, mailResponse.status)

    const user = await this.usersRepository.create({
      name,
      username,
      email,
      password: hashedPassword,
      tempPassword: password,
      visibility
    })

    return user
  }
}
