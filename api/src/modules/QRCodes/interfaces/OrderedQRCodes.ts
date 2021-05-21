import QRCode from "../infra/typeorm/models/QRCode";

export interface OrderedQRCodes {
  data: QRCodeByDate[]
}

export interface QRCodeByDate {
  [date: string]: QRCodeComparisonDate[]
}

export interface QRCodeComparisonDate extends Partial<QRCode> {
  qrCodeCreatorName?: string;
  comparisonDate?: Date
}