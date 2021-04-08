import verifyJwtToken from '@shared/middlewares/verifyJwtToken';
import LikeController from '../controller/LikeController'
import { Router } from 'express'

const likeRouter = Router()
const likeController = new LikeController()

likeRouter.post(
  '/like',
  verifyJwtToken,
  likeController.create
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