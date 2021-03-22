import verifyJwtToken from '@shared/middlewares/verifyJwtToken';
import FollowController from '@modules/Users/infra/http/controller/FollowController'
import { Router } from 'express'

const followRouter = Router()
const followController = new FollowController()

followRouter.post(
  '/follow/:following_id',
  verifyJwtToken,
  followController.create
)

export default followRouter