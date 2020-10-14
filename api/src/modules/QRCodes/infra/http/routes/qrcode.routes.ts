import { Router } from 'express';
import CreateQRCodeController from '../controller/CreateQRCodeController'
import AddQRCodeToUserController from '../controller/AddQRCodeToUserController'
import GetUserQRCodesController from '../controller/GetUserQRCodes'
import verifyJwtToken from '@shared/middlewares/verifyJwtToken'

const qrcodeRouter = Router()
const createQRCodeController = new CreateQRCodeController()
const addQRCodeToUserController = new AddQRCodeToUserController()
const getUserQRCodes = new GetUserQRCodesController()

qrcodeRouter.post('/generate_deactivated_qrcode', createQRCodeController.create)
qrcodeRouter.patch(
  '/add_qrcode',
  verifyJwtToken,
  addQRCodeToUserController.update
)
qrcodeRouter.get(
  '/qrcodes/:user_id',
  verifyJwtToken,
  getUserQRCodes.index
)

export default qrcodeRouter


