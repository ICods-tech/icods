import { Router } from 'express';
import CreateQRCodeController from '../controller/CreateQRCodeController'
import AddQRCodeToUserController from '../controller/AddQRCodeToUserController'
import UserQRCodesController from '../controller/UserQRCodesController'
import ReceivedQRCodesController from '../controller/ReceiveQRCodesController'
import verifyJwtToken from '@shared/middlewares/verifyJwtToken'
import multer from 'multer'
import uploadConfig from '@config/uploadConfig'

const qrcodeRouter = Router()
const upload = multer(uploadConfig)

const createQRCodeController = new CreateQRCodeController()
const addQRCodeToUserController = new AddQRCodeToUserController()
const userQRCodesController = new UserQRCodesController()
const receivedQRCodesController = new ReceivedQRCodesController()

qrcodeRouter.post(
  '/generate_deactivated_qrcode',
  createQRCodeController.create
)

qrcodeRouter.patch(
  '/add_qrcode',
  verifyJwtToken,
  addQRCodeToUserController.update
)

qrcodeRouter.get(
  '/qrcodes',
  verifyJwtToken,
  userQRCodesController.index
)

qrcodeRouter.get(
  '/qrcodes/:qrcode_id',
  verifyJwtToken,
  userQRCodesController.show
)

qrcodeRouter.post(
  '/qrcodes/:qrcode_id',
  verifyJwtToken,
  upload.single('content'),
  userQRCodesController.create
)

qrcodeRouter.post(
  '/receive_qrcode/:qrcode_id',
  verifyJwtToken,
  receivedQRCodesController.create
)

export default qrcodeRouter


