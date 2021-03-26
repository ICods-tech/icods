import AppError from '@shared/error/AppError'
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import { inject, injectable } from 'tsyringe'
import Follow from '@modules/Users/infra/typeorm/models/follow'
import IFollowRepository from '../../IRepositories/IFollowRepository'

@injectable()
export default class UnfollowUserService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('FollowersRepository')
    private followersRepository: IFollowRepository
  ) { }

  public async run(id: string, followingId: string): Promise<void> {
    const user = await this.usersRepository.findById(followingId)

    if (!user) {
      throw new AppError("Trying to unfollow an user that doesn't exist")
    }

    if (await this.followersRepository.checkFollowing(id, followingId)) {
      await this.followersRepository.unfollow(id, followingId)
    } else {
      throw new AppError("Trying to unfollow an user that you don't follow")
    }
  }
}
