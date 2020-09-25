import {Router} from 'express';
import sessionsRouter from '@modules/Users/infra/http/routes/sessions.routes'
import qrCodesRouter from '@modules/QRCodes/infra/http/routes/qrcode.routes'

const routes = Router();

routes.use(sessionsRouter)
routes.use(qrCodesRouter)

export default routes;
