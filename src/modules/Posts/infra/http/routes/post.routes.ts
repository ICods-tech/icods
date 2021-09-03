import verifyJwtToken from '@shared/middlewares/verifyJwtToken';
import PostController from '../controller/PostController'
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