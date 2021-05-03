import { Router } from 'express';
import ReceivedQRCodesController from '../controller/ReceiveQRCodesController'
import FavoriteQRCodeController from '../controller/FavoriteQRCodeController'
import verifyJwtToken from '@shared/middlewares/verifyJwtToken'

const receivedQrCodesRouter = Router()

const receivedQRCodesController = new ReceivedQRCodesController()
const favoriteQRCodesController = new FavoriteQRCodeController()

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

export default receivedQrCodesRouter


