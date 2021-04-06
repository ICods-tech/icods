import { Request, Response } from 'express'
import CreatePostService from '../../../services/createPostService'
import { container } from 'tsyringe'

export default class PostController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { qrcode_id } = request.body

      console.log({
        id,
        qrcode_id
      })

      const createPostService = container.resolve(CreatePostService)

      const post = await createPostService.run(
        id,
        qrcode_id
      )

      return response.json(post)
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }
}
