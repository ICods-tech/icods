import ILikesRepository from '@modules/Posts/IRepositories/ILikesRepository'
import { Repository, getRepository, DeleteResult } from 'typeorm'
import Like from '@modules/Posts/infra/typeorm/models/like'
import ILikeDTO from '@modules/Posts/DTOs/ILikeDTO'

export default class LikesRepository implements ILikesRepository {
  private ormRepository: Repository<Like>

  constructor() {
    this.ormRepository = getRepository(Like)
  }

  public async like({ userId, post }: ILikeDTO): Promise<Like> {
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