import { Router } from 'express';
import CreateQRCodeController from '../controller/CreateQRCodeController'
import AddQRCodeToUserController from '../controller/AddQRCodeToUserController'
import UserQRCodesController from '../controller/UserQRCodesController'
import verifyJwtToken from '@shared/middlewares/verifyJwtToken'
import multer from 'multer'
import uploadConfig from '@config/uploadConfig'

const qrcodeRouter = Router()

const createQRCodeController = new CreateQRCodeController()
const addQRCodeToUserController = new AddQRCodeToUserController()
const userQRCodesController = new UserQRCodesController()

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
  multer(uploadConfig).single('file'),
  userQRCodesController.create
)

export default qrcodeRouter


