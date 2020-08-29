import {Router} from 'express';
import userRouter from '@modules/Users/infra/routes/user.routes'

const routes = Router();
routes.use(userRouter)

export default routes;
