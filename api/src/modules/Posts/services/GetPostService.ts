import { inject, injectable } from 'tsyringe'
import Post from '../infra/typeorm/models/post'
import IPostsRepository from '../IRepositories/IPostsRepository'

@injectable()
export default class GetPostService {

  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) { }

  public async run(post_id: string): Promise<Post> {
    const post = await this.postsRepository.get(post_id)

    if (!post) {
      throw new Error('Post with this ID does not exist!')
    }

    return post
  }
}
