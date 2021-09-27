import AppError from '../../../infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import Like from '../typeorm/models/like'
import ICommentRepository from '../interfaces/ICommentsRepository'

@injectable()
export default class EditCommentService {

  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentRepository
  ) { }

  public async run(id: string, userId: string, content: string): Promise<Like> {
    if (!await this.commentsRepository.checkAuthor(id, userId)) {
      throw new AppError("You do not have the authority to edit that comment or the comment doesn't exist!")
    }

    const updatedComment = await this.commentsRepository.updateCommentContent(id, content)
    return updatedComment
  }
}
