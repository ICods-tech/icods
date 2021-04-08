import ILikesRepository from '@modules/Posts/IRepositories/ILikesRepository'
import { Repository, getRepository } from 'typeorm'
import Like from '@modules/Posts/infra/typeorm/models/like'
import ILikeDTO from '@modules/Posts/DTOs/ILikeDTO'

export default class LikesRepository implements ILikesRepository {
  private ormRepository: Repository<Like>

  constructor() {
    this.ormRepository = getRepository(Like)
  }

  public async like({ user_id, post }: ILikeDTO): Promise<Like> {
    const like = this.ormRepository.create({ user_id, post })

    await this.ormRepository.save(like)

    return like
  }

  public async unlike({ user_id, post }: ILikeDTO): Promise<Like | undefined> {
    const like = await this.ormRepository.findOne(user_id)

    return like || undefined
  }

  public async save(likeEntry: Like): Promise<Like> {
    await this.ormRepository.save(likeEntry)

    return likeEntry
  }
}