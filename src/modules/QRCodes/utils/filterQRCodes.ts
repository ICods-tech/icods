import QRCode from "../typeorm/models/QRCode";
import { IColors } from "../interfaces/IColors";
import { sortQRCodeListByDate } from "./sortQRCodeList";

export function filterQrCodes(
  qrCodes: QRCode[] | [],
  receivedQRCodes: boolean,
  color: IColors | 'noFilter',
  favorite: boolean,
  month: number | null,
  year: number | null
) {
  if (receivedQRCodes) {
    (color !== 'noFilter') && (qrCodes = qrCodes.filter(qrcode => qrcode.receivedColor === color))
    favorite && (qrCodes = qrCodes.filter(qrcode => qrcode.favorited === true))
    if (month && year) qrCodes = qrCodes.filter(qrcode => (qrcode.received_at?.getFullYear() === year && qrcode.received_at?.getMonth() === month))
    qrCodes = sortQRCodeListByDate(qrCodes, 'received_at')
  } else {
    (color !== 'noFilter') && (qrCodes = qrCodes.filter(qrcode => qrcode.madeColor === color))
    favorite && (qrCodes = [])
    if (month && year) qrCodes = qrCodes.filter(qrcode => (qrcode.created_at?.getFullYear() === year && qrcode.created_at?.getMonth() === month))
    qrCodes = sortQRCodeListByDate(qrCodes, 'created_at')
  }

  return qrCodes.map(qrcode => {
    let filteredQRCode = { ...qrcode, qrCodeCreatorName: receivedQRCodes ? qrcode.user?.name : "Você" }
    delete filteredQRCode.user
    delete filteredQRCode.receivedUser
    let color = receivedQRCodes ? qrcode.receivedColor : qrcode.madeColor
    delete filteredQRCode.madeColor
    delete filteredQRCode.receivedColor

    return Object.assign(filteredQRCode, { color })
  })
}
