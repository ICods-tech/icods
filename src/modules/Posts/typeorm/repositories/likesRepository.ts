import ILikesRepository from '@modules/Posts/interfaces/ILikesRepository'
import { Repository, getRepository, DeleteResult } from 'typeorm'
import Like from '@modules/Posts/typeorm/models/like'
import ILike from '@modules/Posts/interfaces/ILike'

export default class LikesRepository implements ILikesRepository {
  private ormRepository: Repository<Like>

  constructor() {
    this.ormRepository = getRepository('likes')
  }

  public async like({ userId, post }: ILike): Promise<Like> {
    const like = this.ormRepository.create({ userId, post })

    await this.ormRepository.save(like)

    return like
  }

  public async get(userId: string, post_id: string): Promise<Like | undefined> {
    const like = await this.ormRepository.findOne({ userId, post: { id: post_id } }, { relations: ['post'] })
    return like || undefined
  }

  public async unlike(id: string): Promise<void | DeleteResult> {
    const deleted = await this.ormRepository.delete(id)
    return deleted
  }

  public async save(likeEntry: Like): Promise<Like> {
    await this.ormRepository.save(likeEntry)

    return likeEntry
  }
}
