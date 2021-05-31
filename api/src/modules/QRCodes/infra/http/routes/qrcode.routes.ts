import { Router } from 'express';
import DeactivatedQRCodeController from '../controller/DeactivatedQRCodeController'
import AddQRCodeToUserController from '../controller/AddQRCodeToUserController'
import UserQRCodesController from '../controller/UserQRCodesController'
import verifyJwtToken from '@shared/middlewares/verifyJwtToken'
import multer from 'multer'
import uploadConfig from '@config/uploadConfig'

const qrcodeRouter = Router()
const upload = multer(uploadConfig)

const deactivatedQRCodeController = new DeactivatedQRCodeController()
const addQRCodeToUserController = new AddQRCodeToUserController()
const userQRCodesController = new UserQRCodesController()

qrcodeRouter.post(
  '/generate_deactivated_qrcode',
  deactivatedQRCodeController.create
)

qrcodeRouter.get(
  '/get_deactivated_qrcode/data?:numberOfQrCodes',
  deactivatedQRCodeController.index
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

export default qrcodeRouter


