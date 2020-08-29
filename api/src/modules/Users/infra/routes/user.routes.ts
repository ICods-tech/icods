import { Router } from 'express'

const userRouter = Router()

userRouter.get('/users', (req, res) => {
  const lucaralho = {
    test: 'appplication',
    functionality: 'yes'
  }

  return res.json(lucaralho);
})

export default userRouter
