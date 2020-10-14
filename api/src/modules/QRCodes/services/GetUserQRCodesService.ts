import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository';
import AppError from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe'

@injectable()
export default class GetUserQRCodesService {

  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository
  ) {}

  public async run(user_id: string): Promise<QRCode[] | []> {
    try {
    const allUserQRCodes = await this.qrCodesRepository.findAllUserQRCodes(user_id)

    return allUserQRCodes

    } catch(err) {
      throw new AppError(err.message)
    }
  }
}
