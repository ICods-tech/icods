import QRCode from "../infra/typeorm/models/QRCode"

export default function checkReceivedQRCodeProperties(qrCode: QRCode, userId: string): void {
  if (!qrCode) throw new Error('QR Code with this ID does not exist')
  if (!qrCode.user) throw new Error('QR Code was not activated yet!')
  if (!('receivedUser' in qrCode)) throw new Error('QR Code does not contain an user on the receiving end')
  if (userId !== qrCode.receivedUser?.id) throw new Error("You cannot alter the favorite status due to the fact that it wasn't you who received the QR Code")
}
