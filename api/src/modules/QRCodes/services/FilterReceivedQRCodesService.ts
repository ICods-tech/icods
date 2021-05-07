import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository';
import IUserRepository from '@modules/Users/IRepositories/IUserRepository';
import { inject, injectable } from 'tsyringe'
import { Colors, colorsObject } from '../interfaces/Colors';
import { FilterQRCodes } from '../interfaces/FilterQRCodes';
import { OrderedQRCodes, QRCodeByDate } from '../interfaces/OrderedQRCodes';
import { addQRCodesToReceivedDates } from '../utils/addQRCodesOnReceivedDates';
import { filterQrCodeColorAndFavorites } from '../utils/filterQRCodeColorAndFavorites';

@injectable()
export default class FilterReceivedQRCodesService {
  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository,

    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) { }

  private checkColorValidity(color: string): color is Colors {
    return colorsObject.hasOwnProperty(color)
  }

  public async run({ id, color, favorited }: FilterQRCodes): Promise<OrderedQRCodes> {
    const user = await this.usersRepository.findById(id)
    if (!user) throw new Error('User with this ID does not exist!')

    console.log(user)
    const receivedQRCodes = filterQrCodeColorAndFavorites(user.receivedQRCodes as QRCode[], color, favorited)
    const orderedReceivedQRCodes = { data: [] } as OrderedQRCodes


    const sortedQRCodes = receivedQRCodes?.length
      ? receivedQRCodes.sort((a: any, b: any) => b.received_at - a.received_at)
      : []

    addQRCodesToReceivedDates(sortedQRCodes, orderedReceivedQRCodes)

    return orderedReceivedQRCodes
  }
}