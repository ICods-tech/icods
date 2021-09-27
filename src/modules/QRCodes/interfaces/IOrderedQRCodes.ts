import QRCode from "../typeorm/models/QRCode";

export interface IOrderedQRCodes {
  data: QRCodeByDate[]
}

export interface QRCodeByDate {
  [date: string]: QRCodeComparisonDate[]
}

export interface QRCodeComparisonDate extends Partial<QRCode> {
  qrCodeCreatorName?: string;
  comparisonDate?: Date
}
