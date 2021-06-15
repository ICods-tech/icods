import verifyJwtToken from '@shared/middlewares/verifyJwtToken';
import { Router } from 'express'
import { body } from 'express-validator'
import SignUpController from '../controller/SignUpController'
import SignInController from '../controller/SignInController'
import ResetPasswordController from '../controller/ResetPasswordController'

const sessionsRouter = Router()
const signUpController = new SignUpController()
const signInController = new SignInController()
const resetPasswordController = new ResetPasswordController()

sessionsRouter.post('/signup',
    body('name')
    .isString()
    .isLength({ min: 1 })
    .withMessage('Campo deve possuir um valor'),
    body('username')
    .isString()
    .isLength({ min: 6, max: 30 })
    .withMessage('Campo deve possuir entre 6 e 30 caracteres'),
    body('email')
    .isEmail()
    .withMessage('Campo deve possuir um e-mail válido'),
    body('password')
    .isString()
    .isLength({ min: 6, max: 40 })
    .withMessage('Campo deve possuir entre 6 e 40 caracteres'),
    signUpController.create)
sessionsRouter.post('/signIn', signInController.create)
sessionsRouter.patch(
    '/resetPassword',
    verifyJwtToken,
    resetPasswordController.update
)

export default sessionsRouter