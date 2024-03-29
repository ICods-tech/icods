import IFollowRepository from '@modules/Users/interfaces/IFollowRepository'
import { Repository, getRepository } from 'typeorm'
import Follow from '@modules/Users/typeorm/models/follow'
import IFollow from '@modules/Users/interfaces/IFollow'

export default class FollowerRepository implements IFollowRepository {
  private ormRepository: Repository<Follow>

  constructor() {
    this.ormRepository = getRepository('followers')
  }

  public async getAllFollowers(id: string): Promise<{ followers: Follow[], followersCount: Number }> {
    const [followers, followersCount] = await this.ormRepository.findAndCount({
      where: { followingId: id },
      select: ['userId']
    })

    return { followers: followers, followersCount: followersCount }
  }

  public async getAllFollowing(id: string): Promise<{ following: Follow[], followingCount: Number }> {
    const [following, followingCount] = await this.ormRepository.findAndCount({
      where: { userId: id },
      select: ['followingId']
    })

    return { following: following, followingCount: followingCount }
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

  public async rejectFollower(id: string){
    await this.ormRepository.delete({ id: id })
  }

  public async follow(data: IFollow): Promise<Follow> {
    const follow = this.ormRepository.create(data)
    await this.ormRepository.save(follow)

    return follow
  }

  public async save(follow: IFollow): Promise<Omit<Follow, 'id' | 'created_at'>> {
    await this.ormRepository.save(follow)

    return follow
  }
}
