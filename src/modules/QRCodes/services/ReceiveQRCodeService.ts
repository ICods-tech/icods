import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/interfaces/IQRCodesRepository';
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import AppError from '../../../infra/error/AppError'
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
    const receivingUser = await getUserById(userId, this.usersRepository)
    let qrcode = await getQRCodeById(qrcode_id, this.qrCodesRepository)

    checkReceivedQRCodeProperties(qrcode, userId, false, true)
    if (qrcode.user?.id === userId) throw new AppError("You cannot send a QR Code to yourself")

    const { created_at, updated_at, password, qrcodes, receivedQRCodes, ...filteredReceivingUser } = receivingUser

    qrcode = await this.qrCodesRepository.receiveQRCode(qrcode, filteredReceivingUser)

    return qrcode
  }
}
