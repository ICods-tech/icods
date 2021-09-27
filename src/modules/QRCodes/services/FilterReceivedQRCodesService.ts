import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import IUserRepository from '@modules/Users/interfaces/IUserRepository';
import AppError from '../../../infra/error/AppError';
import { inject, injectable } from 'tsyringe'
import { IColors, colorsObject } from '../interfaces/IColors';
import { IFilterQRCodes } from '../interfaces/IFilterQRCodes';
import { IOrderedQRCodes, QRCodeComparisonDate } from '../interfaces/IOrderedQRCodes';
import { addQRCodesToReceivedDates } from '../utils/addQRCodesOnReceivedDates';
import { filterQrCodes } from '../utils/filterQRCodes';
import { getUserById } from '../utils/getUserById';
import { sortQRCodeListByDate } from '../utils/sortQRCodeList';

@injectable()
export default class FilterReceivedQRCodesService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) { }

  private checkColorValidity(color: string): color is IColors {
    return colorsObject.hasOwnProperty(color)
  }

  public async run({ id: userId, color, favorited, month, year }: IFilterQRCodes): Promise<IOrderedQRCodes | any> {
    if (!this.checkColorValidity(color)) throw new AppError("Color is not valid!")
    const user = await getUserById(userId, this.usersRepository)

    let madeQRCodes = await this.usersRepository.findAllUserQRCodes(userId)
    let receivedQRCodes = user.receivedQRCodes

    const sortedMadeQRCodes = filterQrCodes(madeQRCodes as QRCode[] | [], false, color, favorited, month, year)
    const sortedReceivedQRCodes = filterQrCodes(receivedQRCodes as QRCode[] | [], true, color, favorited, month, year)

    const orderedUserQRCodes = { data: [] } as IOrderedQRCodes

    const sortedQRCodes = sortQRCodeListByDate([...sortedMadeQRCodes, ...sortedReceivedQRCodes], 'comparisonDate') as QRCodeComparisonDate[]

    addQRCodesToReceivedDates(sortedQRCodes, orderedUserQRCodes)

    return orderedUserQRCodes
  }
}
