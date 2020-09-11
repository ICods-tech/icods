import {Router} from 'express';
import userRouter from '@modules/Users/infra/http/routes/user.routes'
import sessionsRouter from '@modules/Users/infra/http/routes/sessions.routes'

const routes = Router();

routes.use(userRouter)
routes.use(sessionsRouter)

export default routes;
