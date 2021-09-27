import AppError from '../../../../infra/error/AppError'
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import { inject, injectable } from 'tsyringe'
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
    followerUsers: Omit<User[], 'created_at' | 'updated_at' | 'password'>,
    followersCount: Number
  }> {
    const { followers, followersCount } = await this.followersRepository.getAllFollowers(id)
    const followerIds = followers.map(follow => follow.userId)

    const users = await this.usersRepository.findByIds(followerIds)

    return {
      followerUsers: users,
      followersCount
    }
  }
}
