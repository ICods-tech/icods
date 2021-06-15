import IQRCodesRepository from "../IRepositories/IQRCodesRepository"

export async function getQRCodeById(qrcodeId: string, qrcodeRepository: IQRCodesRepository) {
  const qrCode = await qrcodeRepository.get(qrcodeId)
  if (!qrCode) throw new Error('QR Code with this ID does not exist')

  return qrCode
}