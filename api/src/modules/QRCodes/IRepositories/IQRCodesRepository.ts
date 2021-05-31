import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import User from '@modules/Users/infra/typeorm/models/user';
import { Colors } from '../interfaces/Colors';

export default interface IQRCodesRepository {
  create(): Promise<QRCode>;
  delete(id: string): Promise<void>;
  save(qrCode: QRCode): Promise<void>;
  get(id: string): Promise<QRCode | undefined>;
  changeFavoriteStatus(qrCode: QRCode): Promise<QRCode>;
  getMultipleDeactivatedQRCodes(numberOfQrCodes: number): Promise<QRCode[] | []>;
  changeQRCodeColor(qrCode: QRCode, color: Colors, type: 'madeColor' | 'receivedColor'): Promise<QRCode>;
  activate(id: string, user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode>;
  receiveQRCode(qrCode: QRCode, user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode>;
}
