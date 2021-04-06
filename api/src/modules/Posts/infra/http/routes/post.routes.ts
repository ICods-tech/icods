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

// followRouter.delete(
//   '/unfollow/:followingId',
//   verifyJwtToken,
//   followController.destroy
// )

// followRouter.get(
//   '/follow',
//   verifyJwtToken,
//   followController.index
// )

// followRouter.get(
//   '/followers',
//   verifyJwtToken,
//   followerController.index
// )

export default postRouter