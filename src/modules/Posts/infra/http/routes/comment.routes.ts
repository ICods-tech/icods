import verifyJwtToken from '@shared/middlewares/verifyJwtToken';
import CommentController from '../controller/CommentController'
import { Router } from 'express'

const commentRouter = Router()
const commentController = new CommentController()

commentRouter.post(
  '/comment',
  verifyJwtToken,
  commentController.create
)

commentRouter.delete(
  '/comment/:comment_id',
  verifyJwtToken,
  commentController.destroy
)

commentRouter.put(
  '/comment/:comment_id',
  verifyJwtToken,
  commentController.update
)

export default commentRouter