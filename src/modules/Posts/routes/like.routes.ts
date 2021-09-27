import verifyJwtToken from '../../../infra/middlewares/verifyJwtToken';
import LikeController from '../controllers/LikeController'
import { Router } from 'express'

const likeRouter = Router()
const likeController = new LikeController()

likeRouter.post(
  '/like',
  verifyJwtToken,
  likeController.create
)

likeRouter.delete(
  '/unlike',
  verifyJwtToken,
  likeController.destroy
)

// postRouter.get(
//   '/post/:post_id',
//   verifyJwtToken,
//   postController.show
// )

// followRouter.delete(
//   '/unfollow/:followingId',
//   verifyJwtToken,
//   followController.destroy
// )


// followRouter.get(
//   '/followers',
//   verifyJwtToken,
//   followerController.index
// )

export default likeRouter
