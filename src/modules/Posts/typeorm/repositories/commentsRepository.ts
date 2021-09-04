import ICommentsRepository from '@modules/Posts/interfaces/ICommentsRepository'
import { Repository, getRepository, DeleteResult } from 'typeorm'
import Comment from '@modules/Posts/typeorm/models/comment'
import ICommentDTO from '@modules/Posts/interfaces/IComment'

export default class CommentsRepository implements ICommentsRepository {
  private ormRepository: Repository<Comment>

  constructor() {
    this.ormRepository = getRepository('comments')
  }

  public async comment({ userId, post, content }: ICommentDTO): Promise<Comment> {
    const comment = this.ormRepository.create({ userId, post, content })
    await this.ormRepository.save(comment)

    return comment
  }

  public async deleteComment(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  }

  public async get(id: string): Promise<Comment | undefined> {
    const comment = await this.ormRepository.findOne(id)
    return comment || undefined
  }

  public async updateCommentContent(id: string, content: string): Promise<Comment> {
    return this.ormRepository.save({ id, content })
  }

  public async checkAuthor(id: string, userId: string): Promise<boolean> {
    const comment = await this.ormRepository.findOne({ where: { id: id, userId: userId } })
    return !!(comment)
  }

  public async save(commentEntry: Comment): Promise<Comment> {
    await this.ormRepository.save(commentEntry)

    return commentEntry
  }
}
