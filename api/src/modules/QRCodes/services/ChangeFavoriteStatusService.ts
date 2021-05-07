import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IUserRepository from '@modules/Users/IRepositories/IUserRepository';
import { injectable, inject } from 'tsyringe'
import IQRCodesRepository from '../IRepositories/IQRCodesRepository'
import checkReceivedQRCodeProperties from '../utils/checkReceivedQRCodeProperties';

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

    console.log(qrCode)

    checkReceivedQRCodeProperties(qrCode, userId)

    qrCode = await this.qrcodeRepository.changeFavoriteStatus(qrCode)
    return qrCode
  }
}

