import AppError from "../../../infra/error/AppError"
import IQRCodesRepository from "../interfaces/IQRCodesRepository"

export async function getQRCodeById(qrcodeId: string, qrcodeRepository: IQRCodesRepository) {
  const qrCode = await qrcodeRepository.get(qrcodeId)
  if (!qrCode) throw new AppError('QR Code with this ID does not exist')

  return qrCode
}
