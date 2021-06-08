import AppError from '@shared/error/AppError'
import { inject, injectable } from 'tsyringe'
import Follow from '@modules/Users/infra/typeorm/models/follow'
import IFollowRepository from '../../IRepositories/IFollowRepository'

@injectable()
export default class RequestFollowerService {

  constructor(
    @inject('FollowersRepository')
    private followersRepository: IFollowRepository,
  ) { }

  public async run(id: string): Promise<Omit<Follow, 'id' | 'created_at'> | { message: String }> {

    const follow = await this.followersRepository.findById(id);
    if (!follow) {
      throw new AppError("Trying to accept a follow that doesn't exist")
    }
    if (follow?.requestFollower === false) {
      return { message: "Follower already Accepted" }
    }
    Object.assign(follow, { requestFollower: false })
    const follow_updated = await this.followersRepository.save(follow)
    return { message: 'Follower Accepted successfully 🍇' }
  }

}
