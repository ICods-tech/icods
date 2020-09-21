import { Router } from 'express'
import AddQRCodeToUserController from '../controller/AddQRCodeToUserController'
import verifyJwtToken from '@modules/Users/middlewares/verifyJwtToken'

const userRouter = Router()
const addQRCodeToUserController = new AddQRCodeToUserController()

userRouter.patch(
  '/add_qrcode',
  verifyJwtToken,
  addQRCodeToUserController.update
)

export default userRouter
