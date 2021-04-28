import AppError from '@shared/error/AppError'
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import { inject, injectable } from 'tsyringe'
import Follow from '@modules/Users/infra/typeorm/models/follow'
import IFollowRepository from '../../IRepositories/IFollowRepository'
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

    const isPrivate = user?.visibility === true ? false : true;
    if (isPrivate) {
      //// call service for request follow
      const follow = await this.followersRepository.follow({ userId: id, followingId, requestFollower: REQUEST_FOLLOWER_TRUE })

      // amqp.connect('amqp://localhost:5672', function (err: any, conn: any) {
      //   conn.createChannel(function (err: any, ch: any) {
      //     var queue_name = 'q.notification';
      //     var message = JSON.stringify(follow);
      //     ch.assertQueue(queue_name, { durable: false });
      //     ch.sendToQueue(queue_name, new Buffer(message));
      //     console.log(" [x] Sent %s", message);
      //   })
      // });
      //tratamento no mobile deve ser através de notificação
      // usuário é notificado que o usuário X deseja seguir você.
      // no mobile o cliente aceita ou nega
      return { message: 'You send request for follow!' }
    } {
      const follow = await this.followersRepository.follow({ userId: id, followingId, requestFollower: REQUEST_FOLLOWER_FALSE })
      return follow
    }

  }
}
