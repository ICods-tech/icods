import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IUserRepository from '@modules/Users/IRepositories/IUserRepository';
import { injectable, inject } from 'tsyringe'
import IQRCodesRepository from '../IRepositories/IQRCodesRepository'

@injectable()
export default class ChangeFavoriteStatusService {
  constructor(
    @inject('QRCodeRepository')
    private qrcodeRepository: IQRCodesRepository,

    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) { }

  public async run(userId: string, qrcodeId: string): Promise<QRCode> {
    const user = await this.usersRepository.findById(userId)
    if (!user) throw new Error('User with this ID does not exist')

    let qrCode = await this.qrcodeRepository.get(qrcodeId)

    if (!qrCode) throw new Error('QR Code with this ID does not exist')
    if (!qrCode.user) throw new Error('QR Code was not activated yet!')
    console.log(qrCode)
    if (!('receivedUser' in qrCode)) throw new Error('QR Code does not contain an user on the receiving end')
    if (userId !== qrCode.receivedUser?.id) throw new Error("You cannot alter the favorite status due to the fact that it wasn't you who received the QR Code")

    qrCode = await this.qrcodeRepository.changeFavoriteStatus(qrCode)
    return qrCode
  }
}
