import { Request, Response } from 'express'
import GetFollowerService from '@modules/Users/services/follow/GetFollowerService'
import { container } from 'tsyringe'

export default class FollowerController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user

      const getFollowersService = container.resolve(GetFollowerService)

      const { followerUsers, followersCount } = await getFollowersService.run(
        id
      )
      return response.json({ followerUsers, followersCount })
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }
}
