import AppError from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe'
import IFollowRepository from '../../IRepositories/IFollowRepository'

@injectable()
export default class RequestFollowerService {

  constructor(
    @inject('FollowersRepository')
    private followersRepository: IFollowRepository,
  ) { }

  public async run(id: string): Promise<{ message: String }> {
    const follow = await this.followersRepository.findById(id);
    if (!follow) {
      throw new AppError("Trying to reject an follow that doesn't exist")
    }
    await this.followersRepository.rejectFollower(id)
    return { message: 'Follower rejected successfully' }
  }

}
