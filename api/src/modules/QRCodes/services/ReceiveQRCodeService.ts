import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository';
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import AppError from '@shared/error/AppError'
import { inject, injectable } from 'tsyringe'
import checkReceivedQRCodeProperties from '../utils/checkReceivedQRCodeProperties';
import { getQRCodeById } from '../utils/getQRCodeById';
import { getUserById } from '../utils/getUserById';

@injectable()
export default class ReceiveQRCodeService {

  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository,

    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) { }

  public async run(qrcode_id: string, userId: string): Promise<QRCode> {
    try {
      const receivingUser = await getUserById(userId, this.usersRepository)
      let qrcode = await getQRCodeById(qrcode_id, this.qrCodesRepository)

      checkReceivedQRCodeProperties(qrcode, userId, false)
      if (qrcode.user?.id === userId) throw new Error("You cannot send a QR Code to yourself")

      const { created_at, updated_at, password, qrcodes, receivedQRCodes, ...filteredReceivingUser } = receivingUser

      qrcode = await this.qrCodesRepository.receiveQRCode(qrcode, filteredReceivingUser)

      return qrcode
    } catch (err) {
      throw new AppError(err.message)
    }
  }
}
