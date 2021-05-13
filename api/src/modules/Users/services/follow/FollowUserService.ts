import AppError from '@shared/error/AppError'
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import { inject, injectable } from 'tsyringe'
import Follow from '@modules/Users/infra/typeorm/models/follow'
import IFollowRepository from '../../IRepositories/IFollowRepository'
import RabbitmqServer from '@shared/middlewares/RabbitmqServer'
// var amqp = require('amqplib/callback_api');

@injectable()
export default class FollowUserService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('FollowersRepository')
    private followersRepository: IFollowRepository
  ) { }

  public async run(id: string, followingId: string): Promise<Follow | { message: String }> {
    const REQUEST_FOLLOWER_FALSE = false;
    const REQUEST_FOLLOWER_TRUE = true;
    const user = await this.usersRepository.findById(followingId)

    if (!user) {
      throw new AppError("Trying to follow an user that doesn't exist")
    }

    if (id === followingId) {
      throw new AppError("You cannot follow yourself!")
    }

    if (await this.followersRepository.checkFollowing(id, followingId)) {
      return { message: 'User already followed!' }
    }

    const isPrivate = user?.visibility ? false : true;
    if (isPrivate) {
      try {
        const rabbit = new RabbitmqServer(process.env.URL_RABBIT as string)
        await rabbit.start();
        const follow = await this.followersRepository.follow({ userId: id, followingId, requestFollower: REQUEST_FOLLOWER_TRUE })
        Object.assign(follow, { phoneId: "id-phone-notify" })
        await rabbit.publishInQueue(process.env.QUEUE_NAME as string, JSON.stringify(follow))
      } catch (error) {
        console.error(error);
        return { message: 'You send request notification failed 😞'}
      }
      return { message: 'You send request for follow 🤗!' }
    } {
      const follow = await this.followersRepository.follow({ userId: id, followingId, requestFollower: REQUEST_FOLLOWER_FALSE })
      return follow
    }
  }
}
