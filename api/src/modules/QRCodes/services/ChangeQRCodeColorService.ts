import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IUserRepository from '@modules/Users/IRepositories/IUserRepository';
import { injectable, inject } from 'tsyringe'
import { Colors, colorsObject } from '../interfaces/Colors';
import IQRCodesRepository from '../IRepositories/IQRCodesRepository'
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

  private checkColorValidity(color: string): color is Colors {
    return colorsObject.hasOwnProperty(color)
  }

  public async run(userId: string, qrcodeId: string, color: Colors): Promise<QRCode> {
    if (!this.checkColorValidity(color)) throw new Error('Color is not valid!')

    await getUserById(userId, this.usersRepository)
    let qrCode = await getQRCodeById(qrcodeId, this.qrcodeRepository)

    checkReceivedQRCodeProperties(qrCode, userId, false)

    const type = qrCode.user.id === userId
      ? 'madeColor'
      : 'receivedColor'

    if (type === 'receivedColor') {
      if (!('receivedUser' in qrCode)) throw new Error('QR Code does not contain an user on the receiving end')
      if (userId !== qrCode.receivedUser?.id) throw new Error("You cannot alter the status of this QR Code due to the fact that it wasn't you who received it")
    }

    qrCode = await this.qrcodeRepository.changeQRCodeColor(qrCode, color, type)
    return qrCode
  }
}
