import QRCode from "../infra/typeorm/models/QRCode";
import { Colors } from "../interfaces/Colors";
import { sortQRCodeListByDate } from "./sortQRCodeList";

export function filterQrCodeColorAndFavorites(qrCodes: QRCode[] | [], receivedQRCodes: boolean, color: Colors | 'noFilter', favorite: boolean) {
  if (receivedQRCodes) {
    (color !== 'noFilter') && (qrCodes = qrCodes.filter(qrcode => qrcode.receivedColor === color))
    favorite && (qrCodes = qrCodes.filter(qrcode => qrcode.favorited === true))
    qrCodes = sortQRCodeListByDate(qrCodes, 'received_at')
  } else {
    (color !== 'noFilter') && (qrCodes = qrCodes.filter(qrcode => qrcode.madeColor === color))
    favorite && (qrCodes = [])
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