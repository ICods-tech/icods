import verifyJwtToken from '../../../infra/middlewares/verifyJwtToken';
import FollowController from '@modules/Users/controller/FollowController'
import FollowerController from '@modules/Users/controller/FollowerController'
import { Router } from 'express'

const followRouter = Router()
const followController = new FollowController()
const followerController = new FollowerController()

followRouter.post(
  '/follow/:followingId',
  verifyJwtToken,
  followController.create
)

followRouter.delete(
  '/unfollow/:followingId',
  verifyJwtToken,
  followController.destroy
)

followRouter.get(
  '/follow',
  verifyJwtToken,
  followController.index
)

followRouter.get(
  '/followers',
  verifyJwtToken,
  followerController.index
)

followRouter.get(
  '/followers/accept/:id',
  verifyJwtToken,
  followController.acceptFollower
)

followRouter.get(
  '/followers/reject/:id',
  verifyJwtToken,
  followController.rejectFollower
)

export default followRouter
