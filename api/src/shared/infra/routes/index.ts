import { Router } from 'express';
import sessionsRouter from '@modules/Users/infra/http/routes/sessions.routes'
import profileRouter from '@modules/Users/infra/http/routes/profile.routes'
import qrCodesRouter from '@modules/QRCodes/infra/http/routes/qrcode.routes'
import followingRouter from '@modules/Users/infra/http/routes/follow.routes'
import postRouter from '@modules/Posts/infra/http/routes/post.routes'

const routes = Router();

routes.use(sessionsRouter)
routes.use(profileRouter)
routes.use(qrCodesRouter)
routes.use(followingRouter)
routes.use(postRouter)

export default routes;
