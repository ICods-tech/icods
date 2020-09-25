import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';

export default interface IQRCodesRepository {
  create(): Promise<QRCode>;
  delete(id: string): Promise<void>;
  activate(id: string, user_id: string): Promise<QRCode>;
  findAllUserQRCodes(user_id: string): Promise<QRCode[]>
}
