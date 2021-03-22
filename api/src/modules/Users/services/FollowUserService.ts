import AppError from '@shared/error/AppError'
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import { inject, injectable } from 'tsyringe'
import Follow from '@modules/Users/infra/typeorm/models/follow'
import IFollowRepository from '../IRepositories/IFollowRepository'

@injectable()
export default class SignInService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('FollowersRepository')
    private followersRepository: IFollowRepository
  ) { }

  public async run(id: string, followingId: string): Promise<Follow | { message: String }> {
    const user = await this.usersRepository.findById(followingId)

    if (!user) {
      throw new AppError("Trying to follow an user that doesn't exist")
    }

    if (await this.followersRepository.checkFollowing(id, followingId)) {
      return { message: 'User already followed!' }
    }

    const follow = await this.followersRepository.follow({ userId: id, followingId })

    return follow
  }
}
