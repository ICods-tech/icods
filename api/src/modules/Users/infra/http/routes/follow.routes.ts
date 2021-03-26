import verifyJwtToken from '@shared/middlewares/verifyJwtToken';
import FollowController from '@modules/Users/infra/http/controller/FollowController'
import FollowerController from '@modules/Users/infra/http/controller/FollowerController'
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

export default followRouter