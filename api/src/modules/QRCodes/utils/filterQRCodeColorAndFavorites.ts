import QRCode from "../infra/typeorm/models/QRCode";
import { Colors } from "../interfaces/Colors";

export function filterQrCodeColorAndFavorites(qrcodes: QRCode[] | [], color: Colors | 'noFilter', favorite: boolean) {
  if (favorite) qrcodes = qrcodes.filter(qrcode => qrcode.favorited === true)
  if (color !== 'noFilter') qrcodes = qrcodes.filter(qrcode => qrcode.color === color)

  return qrcodes;
}