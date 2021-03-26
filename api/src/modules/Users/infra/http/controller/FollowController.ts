import { Request, Response } from 'express'
import FollowUserService from '@modules/Users/services/follow/FollowUserService'
import UnfollowUserService from '@modules/Users/services/follow/UnfollowUserService'
import GetFollowingService from '@modules/Users/services/follow/GetFollowingService'
import { container } from 'tsyringe'

export default class FollowController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { followingId } = request.params

      const followUserService = container.resolve(FollowUserService)

      const follow = await followUserService.run(
        id,
        followingId
      )

      return response.json(follow)
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user

      const getFollowingService = container.resolve(GetFollowingService)

      const { followingUsers, followingCount } = await getFollowingService.run(
        id
      )
      return response.json({ followingUsers, followingCount })
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }

  public async destroy(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { followingId } = request.params

      const unfollowUserService = container.resolve(UnfollowUserService)

      await unfollowUserService.run(
        id,
        followingId
      )

      return response.json({ message: 'User unfollowed successfully 🍇' })
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }
}
