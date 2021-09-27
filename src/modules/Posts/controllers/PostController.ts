import { Request, Response } from 'express'
import CreatePostService from '../services/CreatePostService'
import GetPostService from '../services/GetPostService'
import DeletePostService from '../services/DeletePostService'
import { container } from 'tsyringe'

export default class PostController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { qrcode_id } = request.body
      const createPostService = container.resolve(CreatePostService)
      const post = await createPostService.run(
        id,
        qrcode_id
      )

      return response.json(post)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { post_id } = request.params
      const getPostService = container.resolve(GetPostService)
      const post = await getPostService.run(post_id)

      return response.json(post)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }

  public async destroy(request: Request, response: Response): Promise<Response> {
    try {
      const { post_id } = request.params
      const deletePostService = container.resolve(DeletePostService)
      const message = await deletePostService.run(post_id)

      return response.json(message)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}
