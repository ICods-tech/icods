import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/interfaces/IQRCodesRepository';
import { inject, injectable } from 'tsyringe'
import { getQRCodeById } from '../utils/getQRCodeById';

@injectable()
export default class GetUserQRCodeService {
  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository
  ) { }

  public async run(qrcode_id: string): Promise<Omit<QRCode, 'color' | 'favorited'>> {
    const qrcode = await getQRCodeById(qrcode_id, this.qrCodesRepository)
    const { receivedColor, favorited, ...filteredQrCode } = qrcode

    return filteredQrCode
  }
}
