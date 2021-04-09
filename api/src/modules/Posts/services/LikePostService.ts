import { inject, injectable } from 'tsyringe'
import Like from '../infra/typeorm/models/like'
import IPostsRepository from '../IRepositories/IPostsRepository'
import ILikesRepository from '../IRepositories/ILikesRepository'
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'

@injectable()
export default class LikePostService {

  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('LikesRepository')
    private likesRepository: ILikesRepository
  ) { }

  public async run(userId: string, post_id: string): Promise<Like> {
    const post = await this.postsRepository.get(post_id)
    if (!post) throw new Error('Post with this ID does not exist!')

    const user = await this.usersRepository.findById(userId)
    if (!user) throw new Error('User with this ID does not exist')

    let filteredPost = (({ id, userId, qrcodeId }) => ({ id, userId, qrcodeId }))(post)

    if (!!(await this.likesRepository.get(userId, post_id))) throw new Error('Cannot Like a post twice')

    const like = await this.likesRepository.like({ userId, post: filteredPost })

    return like
  }
}