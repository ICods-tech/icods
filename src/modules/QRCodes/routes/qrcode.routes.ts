import { Router } from 'express';
import AddQRCodeToUserController from '../controllers/AddQRCodeToUserController'
import UserQRCodesController from '../controllers/UserQRCodesController'
import verifyJwtToken from '../../../infra/middlewares/verifyJwtToken'
import multer from 'multer'
import uploadConfig from '@config/uploadConfig'

const qrcodeRouter = Router()

const addQRCodeToUserController = new AddQRCodeToUserController()
const userQRCodesController = new UserQRCodesController()


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
  // verifyJwtToken, REMOVENDO JWT POIS NA TELA INICIAL NÃO ESTÁ SENDO POSSÍVEL LER O QRCODE
  userQRCodesController.show
)

qrcodeRouter.post(
  '/qrcodes/:qrcode_id',
  verifyJwtToken,
  multer(uploadConfig).single('file'),
  userQRCodesController.create
)

export default qrcodeRouter


