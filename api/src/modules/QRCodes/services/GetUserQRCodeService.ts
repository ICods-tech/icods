import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository';
import { inject, injectable } from 'tsyringe'

@injectable()
export default class GetUserQRCodeService {
  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository
  ) { }

  public async run(qrcode_id: string): Promise<Omit<QRCode, 'color' | 'favorited'>> {
    const qrcode = await this.qrCodesRepository.get(qrcode_id)
    if (!qrcode) throw new Error('This QRCode does not exist!')
    const { color, favorited, ...filteredQrCode } = qrcode
    console.log(filteredQrCode)
    return filteredQrCode
  }
}
