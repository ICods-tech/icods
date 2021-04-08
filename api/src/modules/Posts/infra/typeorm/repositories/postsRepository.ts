import IPostRepository from '@modules/Posts/IRepositories/IPostsRepository'
import { Repository, getRepository } from 'typeorm'
import Post from '@modules/Posts/infra/typeorm/models/post'
import IPostDTO from '@modules/Posts/DTOs/IPostDTO'

export default class PostRepository implements IPostRepository {
  private ormRepository: Repository<Post>

  constructor() {
    this.ormRepository = getRepository(Post)
  }

  public async create(data: IPostDTO): Promise<Post> {
    const post = this.ormRepository.create(data)

    Object.assign(post, { likes: [], comments: [] })

    await this.ormRepository.save(post)

    return post
  }

  public async get(id: string): Promise<Post | undefined> {
    const post = await this.ormRepository.findOne(id, { relations: ["comments", "likes"] })

    return post || undefined
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete({ id: id })
  }

  public async save(postEntry: Post): Promise<Post> {
    await this.ormRepository.save(postEntry)

    return postEntry
  }
}