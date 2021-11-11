import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import { injectable, inject } from 'tsyringe'
import IQRCodesRepository from '../interfaces/IQRCodesRepository'

@injectable()
export default class HandleStatusQRCodeService {
  constructor(
    @inject('QRCodeRepository')
    private qrCodesRepository: IQRCodesRepository,
  ) { }


  public async run(qrcode_id: string): Promise<QRCode> {

    const qrcode = await this.qrCodesRepository.get(qrcode_id) as QRCode
    qrcode.status = 'ACTIVE';
    await this.qrCodesRepository.save(qrcode)

    return qrcode
  }
}4
