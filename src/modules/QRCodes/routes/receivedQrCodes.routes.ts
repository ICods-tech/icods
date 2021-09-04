import { Router } from 'express';
import ReceivedQRCodesController from '../controllers/ReceiveQRCodesController'
import FavoriteQRCodeController from '../controllers/FavoriteQRCodeController'
import ColorQRCodeController from '../controllers/ColorQRCodeController'
import verifyJwtToken from '../../../infra/middlewares/verifyJwtToken'

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

receivedQrCodesRouter.get(
  '/filtered_qrcodes/data?:color?:favorite?:month?:year',
  verifyJwtToken,
  receivedQRCodesController.index
)

export default receivedQrCodesRouter


