import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import User from '@modules/Users/infra/typeorm/models/user';
import { Colors } from '../interfaces/Colors';

export default interface IQRCodesRepository {
  get(id: string): Promise<QRCode | undefined>;
  activate(id: string, user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode>;
  create(): Promise<QRCode>;
  delete(id: string): Promise<void>;
  changeFavoriteStatus(qrCode: QRCode): Promise<QRCode>;
  changeQRCodeColor(qrCode: QRCode, color: Colors): Promise<QRCode>;
  receiveQRCode(qrCode: QRCode, user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode>;
  save(qrCode: QRCode): Promise<void>;
}
