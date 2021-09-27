import { Request, Response } from 'express'
import LikePostService from '../services/LikePostService'
import UnlikePostService from '../services/UnlikePostService'
import { container } from 'tsyringe'

export default class LikeController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { post_id } = request.body

      const likePostService = container.resolve(LikePostService)

      const like = await likePostService.run(
        id,
        post_id
      )

      return response.json(like)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }

  public async destroy(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { post_id } = request.body

      const unlikePostService = container.resolve(UnlikePostService)

      const message = await unlikePostService.run(
        id,
        post_id
      )

      return response.json(message)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}
