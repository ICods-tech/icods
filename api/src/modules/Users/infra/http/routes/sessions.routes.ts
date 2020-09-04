import { Router } from 'express'
import SignUpController from '../controller/SignUpController'

const sessionsRouter = Router()
const signUpController = new SignUpController()

sessionsRouter.post('/signup', signUpController.create)

export default sessionsRouter
