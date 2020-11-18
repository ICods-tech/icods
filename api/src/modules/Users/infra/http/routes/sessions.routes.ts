import verifyJwtToken from '@shared/middlewares/verifyJwtToken';
import { Router } from 'express'
import SignUpController from '../controller/SignUpController'
import SignInController from '../controller/SignInController'
import ResetPasswordController from '../controller/ResetPasswordController'

const sessionsRouter = Router()
const signUpController = new SignUpController()
const signInController = new SignInController()
const resetPasswordController = new ResetPasswordController()

sessionsRouter.post('/signup', signUpController.create)
sessionsRouter.post('/signIn', signInController.create)
sessionsRouter.patch(
    '/resetPassword',
    verifyJwtToken,
    resetPasswordController.update
)


export default sessionsRouter
