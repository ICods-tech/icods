import { Router } from 'express';
import ReceivedQRCodesController from '../controller/ReceiveQRCodesController'
import FavoriteQRCodeController from '../controller/FavoriteQRCodeController'
import ColorQRCodeController from '../controller/ColorQRCodeController'
import verifyJwtToken from '@shared/middlewares/verifyJwtToken'

const receivedQrCodesRouter = Router()

const receivedQRCodesController = new ReceivedQRCodesController()
const favoriteQRCodesController = new FavoriteQRCodeController()
const colorQRCodesController = new ColorQRCodeController()

receivedQrCodesRouter.post(
  '/received_qrcode/:qrcode_id',
  verifyJwtToken,
  receivedQRCodesController.create
)

receivedQrCodesRouter.patch(
  '/received_qrcode/favorite/:qrcode_id',
  verifyJwtToken,
  favoriteQRCodesController.update
)

receivedQrCodesRouter.patch(
  '/received_qrcode/color/:qrcode_id',
  verifyJwtToken,
  colorQRCodesController.update
)

export default receivedQrCodesRouter


