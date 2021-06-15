import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository';
import IUserRepository from '@modules/Users/IRepositories/IUserRepository';
import { inject, injectable } from 'tsyringe'
import { Colors, colorsObject } from '../interfaces/Colors';
import { FilterQRCodes } from '../interfaces/FilterQRCodes';
import { OrderedQRCodes, QRCodeByDate, QRCodeComparisonDate } from '../interfaces/OrderedQRCodes';
import { addQRCodesToReceivedDates } from '../utils/addQRCodesOnReceivedDates';
import { filterQrCodes } from '../utils/filterQRCodes';
import { getUserById } from '../utils/getUserById';
import { sortQRCodeListByDate } from '../utils/sortQRCodeList';

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

  public async run({ id: userId, color, favorited, month, year }: FilterQRCodes): Promise<OrderedQRCodes | any> {
    if (!this.checkColorValidity(color)) throw new Error("Color is not valid!")
    const user = await getUserById(userId, this.usersRepository)

    let madeQRCodes = await this.usersRepository.findAllUserQRCodes(userId)
    let receivedQRCodes = user.receivedQRCodes

    const sortedMadeQRCodes = filterQrCodes(madeQRCodes as QRCode[] | [], false, color, favorited, month, year)
    const sortedReceivedQRCodes = filterQrCodes(receivedQRCodes as QRCode[] | [], true, color, favorited, month, year)

    const orderedUserQRCodes = { data: [] } as OrderedQRCodes

    const sortedQRCodes = sortQRCodeListByDate([...sortedMadeQRCodes, ...sortedReceivedQRCodes], 'comparisonDate') as QRCodeComparisonDate[]

    addQRCodesToReceivedDates(sortedQRCodes, orderedUserQRCodes)

    return orderedUserQRCodes
  }
}