import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/interfaces/IQRCodesRepository';
import AppError from '../../../infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import IUserRepository from '@modules/Users/interfaces/IUserRepository';
const logger = require("../../../infra/middlewares/Logger");

@injectable()
export default class AddQRCodeToUserService {

  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository,
    @inject('UsersRepository')
    private userRepository: IUserRepository
  ) { }

  public async run( qrcode_id: string,
    name: string,
    size: number,
    key: string,
    url: string,
    userId: string): Promise<QRCode> {
    try {
      const qrcode = await this.qrCodesRepository.get(qrcode_id) as QRCode
      const user = await this.userRepository.findById(userId);

      qrcode.link = url;
      qrcode.status = 'IN_PROGRESS';
      qrcode.content = name;
      qrcode.user = user;
      await this.qrCodesRepository.save(qrcode)

      return qrcode
    } catch (err: any) {
      logger.log(err.message)
      throw new AppError(err.message)
    }
  }
}
