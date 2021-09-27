import QRCode from "../typeorm/models/QRCode";

export function sortQRCodeListByDate(qrCodes: QRCode[] | [], type: 'created_at' | 'received_at' | 'comparisonDate') {
  qrCodes = qrCodes?.length
    ? qrCodes.sort((a: any, b: any) => b[type] - a[type])
    : []

  return type === 'comparisonDate' ? qrCodes : qrCodes.map(qrCode => ({ ...qrCode, comparisonDate: qrCode[type] }))
}
