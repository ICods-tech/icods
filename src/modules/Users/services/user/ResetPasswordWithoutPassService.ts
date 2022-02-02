import AppError from '../../../../infra/error/AppError'
import User from '@modules/Users/typeorm/models/user'
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import IHashProvider from '@modules/Users/providers/hashProvider/model/IHashProvider'
import { inject, injectable } from 'tsyringe'
import { sendEmailWithSES } from 'src/infra/middlewares/SES'

@injectable()
export default class ResetPasswordWithoutPassService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) { }

  public async sendMailRecovery(email: string): Promise<User> {
    let user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new AppError('User does not exist')
    }
    const randomPassword = Math.random().toString(36).slice(-8);

    const deeplinkRecovery = `https://icodsmobile.page.link/recovery?link=https://icods.com.br?email=${email}&pass=${randomPassword}&apn=com.icodsmobile`
    console.log(deeplinkRecovery);

    await sendEmailWithSES({
      subject: 'Recuperação de senha!',
      type: 'recoveryPassword',
      recipientEmail: email,
      data: {
        userName: user.name,
        link: deeplinkRecovery,
        tempPass: randomPassword
      },
    });
    Object.assign(user, { tempPassword: randomPassword })

    this.usersRepository.save(user)

    return user
  }

  async run(email: string,tempPassword: string, newPassword: string){
    let user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('User does not exist')
    }

    if (tempPassword !== user.tempPassword) {
      throw new AppError('Senha temporária ou email inválido!')
    }

    const new_password = await this.hashProvider.encrypt(newPassword)
    Object.assign(user, { password: new_password })

    this.usersRepository.save(user)

    return user
  }
}
