import AppError from '../../../infra/error/AppError'
import { inject, injectable } from 'tsyringe'
import ICommentRepository from '../interfaces/ICommentsRepository'

@injectable()
export default class DeleteCommentService {

  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentRepository
  ) { }

  public async run(id: string, userId: string): Promise<{ message: string }> {
    if (!(await this.commentsRepository.checkAuthor(id, userId))) {
      throw new AppError("You do not have the authority to delete that comment or the comment doesn't exist!")
    }

    await this.commentsRepository.deleteComment(id)

    return { message: "Deleted comment successfully!" }
  }
}
