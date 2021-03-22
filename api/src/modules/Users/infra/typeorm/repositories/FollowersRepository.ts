import IFollowRepository from '@modules/Users/IRepositories/IFollowRepository'
import { Repository, getRepository } from 'typeorm'
import Follow from '@modules/Users/infra/typeorm/models/follow'
import IFollowDTO from '@modules/Users/DTOs/IFollowDTO'

export default class FollowerRepository implements IFollowRepository {
  private ormRepository: Repository<Follow>

  constructor() {
    this.ormRepository = getRepository(Follow)
  }

  public async getAllFollowers(id: string): Promise<Number> {
    const followers = await this.ormRepository.find({
      where: { followingId: id }
    })

    return followers.length
  }

  public async getAllFollowing(id: string): Promise<Number> {
    const following = await this.ormRepository.find({
      where: { userId: id }
    })

    return following.length
  }

  public async findById(id: string): Promise<Follow | undefined> {
    const follow = await this.ormRepository.findOne(id)

    return follow || undefined
  }

  public async checkFollowing(id: string, followingId: string) {
    const checkFollow = await this.ormRepository.findOne({
      where: { userId: id, followingId: followingId }
    })

    return checkFollow ? true : false
  }

  public async unfollow(id: string, followingId: string) {
    await this.ormRepository.delete({ userId: id, followingId: followingId })
  }

  public async follow(data: IFollowDTO): Promise<Follow> {
    const follow = this.ormRepository.create(data)
    await this.ormRepository.save(follow)

    return follow
  }

  public async save(follow: IFollowDTO): Promise<Omit<Follow, 'id' | 'created_at'>> {
    await this.ormRepository.save(follow)

    return follow
  }
}