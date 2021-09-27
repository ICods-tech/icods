import { Router } from 'express';
import sessionsRouter from '@modules/Users/routes/sessions.routes'
import profileRouter from '@modules/Users/routes/profile.routes'
import qrCodesRouter from '@modules/QRCodes/routes/qrcode.routes'
import receivedQrCodesRouter from '@modules/QRCodes/routes/receivedQrCodes.routes'
import followingRouter from '@modules/Users/routes/follow.routes'
import postRouter from '@modules/Posts/routes/post.routes'
import likeRouter from '@modules/Posts/routes/like.routes'
import commentRouter from '@modules/Posts/routes/comment.routes'

const routes = Router();

routes.get("/health", (req, res) => res.json(
  {
    message: "ok 🚀",
    status: 200 ,
    version: "1.0.0"
  }
));

routes.use(sessionsRouter)
routes.use(profileRouter)
routes.use(qrCodesRouter)
routes.use(receivedQrCodesRouter)
routes.use(followingRouter)
routes.use(postRouter)
routes.use(likeRouter)
routes.use(commentRouter)

export default routes;
