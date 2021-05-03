import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository';
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import AppError from '@shared/error/AppError'
import { inject, injectable } from 'tsyringe'
import { Colors } from '../interfaces/Colors';

@injectable()
export default class ReceiveQRCodeService {

  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository,

    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) { }

  public async run(qrcode_id: string, id: string): Promise<QRCode> {
    try {
      const receivingUser = await this.usersRepository.findById(id)
      if (!receivingUser) throw new Error('User with this ID does not exist')

      let qrcode = await this.qrCodesRepository.get(qrcode_id)
      if (!qrcode) throw new Error('This QR Code does not exist!')
      if (!qrcode.user) throw new Error('QR Code was not activated yet!')
      if (qrcode.user.id === id) throw new Error('You cannot send a QR Code to yourself!')

      const { created_at, updated_at, password, qrcodes, ...filteredReceivingUser } = receivingUser

      qrcode = await this.qrCodesRepository.receiveQRCode(qrcode, filteredReceivingUser)

      return qrcode
    } catch (err) {
      throw new AppError(err.message)
    }
  }
}
