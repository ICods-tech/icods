import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import User from '@modules/Users/infra/typeorm/models/user';

export default interface IQRCodesRepository {
  get(id: string): Promise<QRCode | undefined>;
  create(): Promise<QRCode>;
  delete(id: string): Promise<void>;
  save(qrcode: QRCode): Promise<void>;
  activate(id: string, user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>): Promise<QRCode>;
}
