import { Router } from 'express';
import { body } from 'express-validator';
import verifyJwtToken from '../../../infra/middlewares/verifyJwtToken';
import CreateClientController from '../controller/CreateClientController';
import DeactivatedQRCodeController from '../controller/DeactivatedQRCodeController';
import DeleteClientController from '../controller/DeleteClientController';
import DeleteLotController from '../controller/DeleteLotController';
import DeleteQRCodeController from '../controller/DeleteQRCodeController';
import GetAllClientsController from '../controller/GetAllClientsController';
import GetAllLotsFromClientController from '../controller/GetAllLotsFromClientController';
import GetAllQRCodesFromLotController from '../controller/GetAllQRCodesFromLotController';
import GetClientByIdController from '../controller/GetClientByIdController';
import GetQRCodeFileController from '../controller/GetFileQRCodes';
import SignInBusinessController from '../controller/SignInBusinessController';
import SignUpController from '../controller/SignUpBusinessController';

const businessRouter = Router();
const signUpController = new SignUpController();
const signInBusinessController = new SignInBusinessController();
const createClientController = new CreateClientController();
const getAllClientsController = new GetAllClientsController();
const getAllQRcodeFromLotController = new GetAllQRCodesFromLotController();
const getAllLotsFromClientController = new GetAllLotsFromClientController();
const getClientByIdController = new GetClientByIdController();
const deactivatedQRCodeController = new DeactivatedQRCodeController();
const getQRCodeFileController = new GetQRCodeFileController();
const deleteQRCodeController = new DeleteQRCodeController();
const deleteLotController = new DeleteLotController();
const deleteClientController = new DeleteClientController();


businessRouter.post(
  '/business/generate_deactivated_qrcode',
  verifyJwtToken,
  deactivatedQRCodeController.create
)

businessRouter.get(
  '/business/get_deactivated_qrcode/data?:numberOfQrCodes',
  deactivatedQRCodeController.index
)

businessRouter.get(
  '/business/qrcode-file/:id',
  verifyJwtToken,
  getQRCodeFileController.run,
);

businessRouter.delete(
  '/business/qrcodes/:id',
  verifyJwtToken,
  deleteQRCodeController.delete,
);

businessRouter.delete(
  '/business/lots/:id',
  verifyJwtToken,
  deleteLotController.delete,
);

businessRouter.post(
  '/business/signin',
  body('email')
    .isString()
    .not()
    .isEmpty()
    .withMessage('Campo email não pode ser vazio'),
    body('password')
      .isString()
      .not().isEmpty()
      .withMessage('Campo senha não pode ser vazio'),
    signInBusinessController.create,
);

businessRouter.post(
  '/business/signup',
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
  '/business/clients',
  body('name')
    .isString()
    .not()
    .isEmpty()
    .withMessage('Nome do cliente é obrigatório '),
  body('email').isEmail().withMessage('Campo email deve possuir um e-mail válido'),
  body('phone')
    .isString()
    .not()
    .isEmpty()
    .withMessage('Telefone do cliente é obrigatório '),
    verifyJwtToken,
  createClientController.create,
);

businessRouter.get(
  '/business/clients/lots/:lotId/qrcodes',
  verifyJwtToken,
  getAllQRcodeFromLotController.run,
);

businessRouter.get(
  '/business/clients/:clientId/lots',
  verifyJwtToken,
  getAllLotsFromClientController.run,
);

businessRouter.get(
  '/business/clients/:id',
  verifyJwtToken,
  getClientByIdController.run,
);

businessRouter.get(
  '/business/clients',
  verifyJwtToken,
  getAllClientsController.run,
);

businessRouter.delete(
  '/business/clients/:id',
  verifyJwtToken,
  deleteClientController.delete,
);

export default businessRouter;
