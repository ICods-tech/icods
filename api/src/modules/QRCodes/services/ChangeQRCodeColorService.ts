import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IUserRepository from '@modules/Users/IRepositories/IUserRepository';
import { injectable, inject } from 'tsyringe'
import { Colors, colorsObject } from '../interfaces/Colors';
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

  private checkColorValidity(color: string): color is Colors {
    return colorsObject.hasOwnProperty(color)
  }

  public async run(userId: string, qrcodeId: string, color: Colors): Promise<QRCode> {
    if (!this.checkColorValidity(color)) throw new Error('Color is not valid!')

    console.log('Inside SERVICE')
    console.log({ userId, qrcodeId, color })

    const user = await this.usersRepository.findById(userId)
    if (!user) throw new Error('User with this ID does not exist')

    let qrCode = await this.qrcodeRepository.get(qrcodeId)
    if (!qrCode) throw new Error('QR Code with this ID does not exist')

    checkReceivedQRCodeProperties(qrCode, userId)

    qrCode = await this.qrcodeRepository.changeQRCodeColor(qrCode, color)
    return qrCode
  }
}
