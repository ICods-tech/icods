import { Router } from 'express';
import { body } from 'express-validator';
import verifyJwtToken from '../../../infra/middlewares/verifyJwtToken';
import CreateClientController from '../controller/CreateClientController';
import GetAllClientsController from '../controller/GetAllClientsController';
import GetAllLotsFromClientController from '../controller/GetAllLotsFromClientController';
import GetAllQRCodesFromLotController from '../controller/GetAllQRCodesFromLotController';
import SignInBusinessController from '../controller/SignInBusinessController';
import SignUpController from '../controller/SignUpBusinessController';

const businessRouter = Router();
const signUpController = new SignUpController();
const signInBusinessController = new SignInBusinessController();
const createClientController = new CreateClientController();
const getAllClientsController = new GetAllClientsController();
const getAllQRcodeFromLotController = new GetAllQRCodesFromLotController();
const getAllLotsFromClientController = new GetAllLotsFromClientController();

businessRouter.post(
  '/signin-business',
  body('email')
    .isString()
    .not()
    .isEmpty()
    .withMessage('Nome da empresa é obrigatório '),
  body('password')
    .isString()
    .isLength({ min: 6, max: 40 })
    .withMessage('Campo deve possuir entre 6 e 40 caracteres'),
  signInBusinessController.create,
);

businessRouter.post(
  '/signup-business',
  body('companyName')
    .isString()
    .not()
    .isEmpty()
    .withMessage('Nome da empresa é obrigatório '),
  body('email').isEmail().withMessage('Campo deve possuir um e-mail válido'),
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
  signUpController.create,
);

businessRouter.post(
  '/client-business',
  body('name')
    .isString()
    .not()
    .isEmpty()
    .withMessage('Nome do cliente é obrigatório '),
  body('email').isEmail().withMessage('Campo deve possuir um e-mail válido'),
  body('phone')
    .isString()
    .not()
    .isEmpty()
    .withMessage('Telefone do cliente é obrigatório '),
    verifyJwtToken,
  createClientController.create,
);


businessRouter.get(
  '/client-business',
  verifyJwtToken,
  getAllClientsController.run,
);

businessRouter.get(
  '/client-business-qrcodes/:lotId',
  verifyJwtToken,
  getAllQRcodeFromLotController.run,
);

businessRouter.get(
  '/client-business-lots/:clientId',
  verifyJwtToken,
  getAllLotsFromClientController.run,
);


export default businessRouter;
