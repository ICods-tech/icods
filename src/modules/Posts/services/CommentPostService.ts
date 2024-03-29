import { inject, injectable } from 'tsyringe'
import Like from '../typeorm/models/like'
import IPostsRepository from '../interfaces/IPostsRepository'
import ICommentRepository from '../interfaces/ICommentsRepository'
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import AppError from '../../../infra/error/AppError'

@injectable()
export default class CommentPostService {

  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('CommentsRepository')
    private commentsRepository: ICommentRepository
  ) { }

  public async run(userId: string, post_id: string, content: string): Promise<Like> {
    const post = await this.postsRepository.get(post_id)
    if (!post) throw new AppError('Post with this ID does not exist!')

    const user = await this.usersRepository.findById(userId)
    if (!user) throw new AppError('User with this ID does not exist')

    let filteredPost = (({ id, userId, qrcodeId }) => ({ id, userId, qrcodeId }))(post)

    const comment = await this.commentsRepository.comment({ userId, post: filteredPost, content })
    return comment
  }
}
