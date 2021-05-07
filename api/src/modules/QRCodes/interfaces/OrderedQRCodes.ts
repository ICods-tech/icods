import QRCode from "../infra/typeorm/models/QRCode";

export interface OrderedQRCodes {
  data: QRCodeByDate[]
}

export interface QRCodeByDate {
  [date: string]: QRCode[]
}