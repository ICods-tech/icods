import { Router } from 'express'
import SignUpController from '../controller/SignUpController'
import SignInController from '../controller/SignInController'

const sessionsRouter = Router()

const signUpController = new SignUpController()
const signInController = new SignInController()

sessionsRouter.post('/signup', signUpController.create)
sessionsRouter.post('/signIn', signInController.create)

export default sessionsRouter
