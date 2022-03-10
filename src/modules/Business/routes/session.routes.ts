import { Router } from 'express';
import { body } from 'express-validator';
import SignInBusinessController from '../controller/SignInBusinessController';
import SignUpController from '../controller/SignUpBusinessController';

const businessRouter = Router()
const signUpController = new SignUpController()
const signInBusinessController = new SignInBusinessController()


businessRouter.post('/signin-business',
  body('email')
    .isString().not().isEmpty().withMessage('Nome da empresa é obrigatório '),
  body('password')
    .isString()
    .isLength({ min: 6, max: 40 })
    .withMessage('Campo deve possuir entre 6 e 40 caracteres'),
  signInBusinessController.create)


businessRouter.post('/signup-business',
  body('companyName').isString().not().isEmpty().withMessage('Nome da empresa é obrigatório '),
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

// businessRouter.delete(
//   '/delete-business',
//   verifyJwtToken,
//   deleteUserController.delete
// )

export default businessRouter
