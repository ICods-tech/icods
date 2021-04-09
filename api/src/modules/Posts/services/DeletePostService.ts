import { inject, injectable } from 'tsyringe'
import IPostsRepository from '../IRepositories/IPostsRepository'

@injectable()
export default class DeletePostService {

  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) { }

  public async run(post_id: string): Promise<{ message: string }> {
    await this.postsRepository.delete(post_id)

    return { message: "Post deleted successfully!" }
  }
}
