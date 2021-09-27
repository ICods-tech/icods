import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import User from '@modules/Users/typeorm/models/user';
import { IColors } from './IColors';

export default interface IQRCodesRepository {
  create(): Promise<QRCode>;
  delete(id: string): Promise<void>;
  save(qrCode: QRCode): Promise<void>;
  get(id: string): Promise<QRCode | undefined>;
  changeFavoriteStatus(qrCode: QRCode): Promise<QRCode>;
  getMultipleDeactivatedQRCodes(numberOfQrCodes: number): Promise<QRCode[] | []>;
  changeQRCodeColor(qrCode: QRCode, color: IColors, type: 'madeColor' | 'receivedColor'): Promise<QRCode>;
  activate(id: string, user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode>;
  receiveQRCode(qrCode: QRCode, user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode>;
}
