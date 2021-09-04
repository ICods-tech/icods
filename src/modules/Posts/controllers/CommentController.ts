import { Request, Response } from 'express'
import CommentPostService from '../services/CommentPostService'
import DeletePostService from '../services/DeleteCommentService'
import EditCommentService from '../services/EditCommentService'
import { container } from 'tsyringe'

export default class CommentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { post_id, content } = request.body

      const commentPostService = container.resolve(CommentPostService)

      const comment = await commentPostService.run(
        id,
        post_id,
        content
      )

      return response.json(comment)
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }

  public async destroy(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { comment_id } = request.params

      const deleteCommentService = container.resolve(DeletePostService)

      const message = await deleteCommentService.run(
        comment_id,
        id
      )

      return response.json(message)
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user
      const { comment_id } = request.params
      const { content } = request.body

      const editCommentService = container.resolve(EditCommentService)

      const message = await editCommentService.run(
        comment_id,
        id,
        content
      )

      return response.json(message)
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }
}
