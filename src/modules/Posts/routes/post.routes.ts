import verifyJwtToken from '../../../infra/middlewares/verifyJwtToken';
import PostController from '../controllers/PostController'
import { Router } from 'express'

const postRouter = Router()
const postController = new PostController()

postRouter.post(
  '/post',
  verifyJwtToken,
  postController.create
)

postRouter.get(
  '/post/:post_id',
  verifyJwtToken,
  postController.show
)

postRouter.delete(
  '/post/:post_id',
  verifyJwtToken,
  postController.destroy
)

export default postRouter
