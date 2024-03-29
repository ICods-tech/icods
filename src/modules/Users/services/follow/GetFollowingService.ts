import AppError from '../../../../infra/error/AppError'
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import { inject, injectable } from 'tsyringe'
import Follow from '@modules/Users/typeorm/models/follow'
import IFollowRepository from '../../interfaces/IFollowRepository'
import User from '@modules/Users/typeorm/models/user'

@injectable()
export default class GetFollowingService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('FollowersRepository')
    private followersRepository: IFollowRepository
  ) { }

  public async run(id: string): Promise<{
    followingUsers: Omit<User[], 'created_at' | 'updated_at' | 'password'>,
    followingCount: Number
  }> {
    const { following, followingCount } = await this.followersRepository.getAllFollowing(id)
    const followingIds = following.map(follow => follow.followingId)

    const users = await this.usersRepository.findByIds(followingIds)

    return {
      followingUsers: users,
      followingCount
    }
  }
}
