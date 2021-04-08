import { Request, Response } from 'express'
import LikePostService from '../../../services/LikePostService'
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
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }
}
