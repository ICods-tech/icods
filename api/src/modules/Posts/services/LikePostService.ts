import { inject, injectable } from 'tsyringe'
import Like from '../infra/typeorm/models/like'
import IPostsRepository from '../IRepositories/IPostsRepository'
import ILikesRepository from '../IRepositories/ILikesRepository'

@injectable()
export default class LikePostService {

  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('LikesRepository')
    private likesRepository: ILikesRepository
  ) { }

  public async run(user_id: string, post_id: string): Promise<Like> {
    const post = await this.postsRepository.get(post_id)

    if (!post) {
      throw new Error('Post with this ID does not exist!')
    }

    const { likes, comments, ...filteredPost } = post

    const like = await this.likesRepository.like({ user_id, post: filteredPost })

    return like
  }
}
