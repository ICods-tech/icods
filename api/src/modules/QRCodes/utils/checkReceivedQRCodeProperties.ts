import QRCode from "../infra/typeorm/models/QRCode"

export default function checkReceivedQRCodeProperties(qrCode: QRCode, userId: string, favorited: boolean): void {
  if (!qrCode.user) throw new Error('QR Code was not activated yet!')
  if (favorited) {
    if (!('receivedUser' in qrCode)) throw new Error('QR Code does not contain an user on the receiving end')
    if (userId !== qrCode.receivedUser?.id) throw new Error("You cannot alter the status of this QR Code due to the fact that it wasn't you who received it")
  }
}
