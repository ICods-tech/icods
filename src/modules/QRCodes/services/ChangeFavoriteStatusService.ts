import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import IUserRepository from '@modules/Users/interfaces/IUserRepository';
import { injectable, inject } from 'tsyringe'
import IQRCodesRepository from '../interfaces/IQRCodesRepository'
import checkReceivedQRCodeProperties from '../utils/checkReceivedQRCodeProperties';
import { getQRCodeById } from '../utils/getQRCodeById';
import { getUserById } from '../utils/getUserById';

@injectable()
export default class ChangeFavoriteStatusService {
  constructor(
    @inject('QRCodeRepository')
    private qrcodeRepository: IQRCodesRepository,

    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) { }

  public async run(userId: string, qrcodeId: string): Promise<QRCode> {
    await getUserById(userId, this.usersRepository);
    let qrCode = await getQRCodeById(qrcodeId, this.qrcodeRepository)

    checkReceivedQRCodeProperties(qrCode, userId, true, false)

    qrCode = await this.qrcodeRepository.changeFavoriteStatus(qrCode)
    return qrCode
  }
}

