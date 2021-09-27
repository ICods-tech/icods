import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/interfaces/IQRCodesRepository';
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import AppError from '../../../infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import { getUserById } from '../utils/getUserById';

@injectable()
export default class AddQRCodeToUserService {

  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository,

    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) { }

  public async run(qrcode_id: string, userId: string): Promise<QRCode> {
    try {
      const user = await getUserById(userId, this.usersRepository)
      const { created_at, updated_at, password, receivedQRCodes, ...filteredUser } = user
      const qrcode = await this.qrCodesRepository.activate(qrcode_id, filteredUser)

      return qrcode
    } catch (err: any) {
      throw new AppError(err.message)
    }
  }
}
