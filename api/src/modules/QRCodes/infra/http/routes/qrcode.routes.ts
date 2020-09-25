import { Router } from 'express';
import CreateQRCodeController from '../controller/CreateQRCodeController'
import AddQRCodeToUserController from '../controller/AddQRCodeToUserController'
import verifyJwtToken from '@shared/middlewares/verifyJwtToken'

const qrcodeRouter = Router()
const createQRCodeController = new CreateQRCodeController()
const addQRCodeToUserController = new AddQRCodeToUserController()

qrcodeRouter.post('/generate_deactivated_qrcode', createQRCodeController.create)
qrcodeRouter.patch(
  '/add_qrcode',
  verifyJwtToken,
  addQRCodeToUserController.update
)

export default qrcodeRouter


