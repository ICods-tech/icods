import verifyJwtToken from '../../../infra/middlewares/verifyJwtToken';
import { Router } from 'express'
import ProfileVisibilityController from '../controller/ProfileVisibilityController'

const profileRouter = Router()
const profileVisibilityController = new ProfileVisibilityController()

profileRouter.patch(
    '/changeVisibility',
    verifyJwtToken,
    profileVisibilityController.update
)

export default profileRouter
