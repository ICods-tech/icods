import { Router } from 'express';
import CreateQRCodeController from '../controller/CreateQRCodeController'

const qrcodeRouter = Router()
const createQRCodeController = new CreateQRCodeController()

qrcodeRouter.post('/generate_deactivated_qrcode', createQRCodeController.create)

export default qrcodeRouter


