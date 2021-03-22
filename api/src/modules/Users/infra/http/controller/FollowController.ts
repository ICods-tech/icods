import { Request, Response } from 'express'
import FollowUserService from '@modules/Users/services/FollowUserService'
import { container } from 'tsyringe'

export default class FollowController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { following_id } = request.params

      const followUserService = container.resolve(FollowUserService)

      const follow = await followUserService.run(
        id,
        following_id
      )

      return response.json(follow)
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }
}
