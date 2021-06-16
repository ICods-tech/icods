import AppError from "@shared/error/AppError"
import IQRCodesRepository from "../IRepositories/IQRCodesRepository"

export async function getQRCodeById(qrcodeId: string, qrcodeRepository: IQRCodesRepository) {
  const qrCode = await qrcodeRepository.get(qrcodeId)
  if (!qrCode) throw new AppError('QR Code with this ID does not exist')

  return qrCode
}