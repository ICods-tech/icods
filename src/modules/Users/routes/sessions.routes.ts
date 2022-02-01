import verifyJwtToken from '../../../infra/middlewares/verifyJwtToken';
import { Router } from 'express'
import { body, check } from 'express-validator'
import SignUpController from '../controller/SignUpController'
import SignInController from '../controller/SignInController'
import ResetPasswordController from '../controller/ResetPasswordController'
import DeleteUserController from '../controller/DeleteUserController';
import ResetPasswordWithoutPassService from '../services/user/ResetPasswordWithoutPassService';
import ResetPasswordWithoutPassController from '../controller/ResetWithoutPassController';

const sessionsRouter = Router()
const signUpController = new SignUpController()
const signInController = new SignInController()
const resetPasswordController = new ResetPasswordController()
const resetPasswordWithoutPassController = new ResetPasswordWithoutPassController()
const deleteUserController = new DeleteUserController()

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
    body('passwordConfirmation').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Senhas devem ser iguais');
        }
        return true;
      }),
  signUpController.create)

sessionsRouter.post('/signIn', signInController.create)

sessionsRouter.patch(
    '/resetPassword',
    verifyJwtToken,
    resetPasswordController.update
)

sessionsRouter.patch(
    '/resetPasswordWithoutPass',
    resetPasswordWithoutPassController.sendMailRecovery
)

sessionsRouter.patch(
    '/resetPasswordTempPass',
    body('newPassword')
    .isString()
    .isLength({ min: 6, max: 40 })
        .withMessage('Campo deve possuir entre 6 e 40 caracteres'),
    body('passwordConfirmation').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Senhas devem ser iguais');
        }
        return true;
      }),
    resetPasswordWithoutPassController.run
)

sessionsRouter.delete(
  '/delete-user',
  verifyJwtToken,
  deleteUserController.delete
)

export default sessionsRouter
