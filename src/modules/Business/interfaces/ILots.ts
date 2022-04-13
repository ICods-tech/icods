import QRCode from '../../QRCodes/typeorm/models/QRCode'

export default interface ILots {
  id: string;
  clientId: string;
  qrcodes: QRCode[];
}
