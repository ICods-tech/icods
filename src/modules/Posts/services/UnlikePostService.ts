import AppError from '@shared/error/AppError'
import { inject, injectable } from 'tsyringe'
import ILikesRepository from '../IRepositories/ILikesRepository'

@injectable()
export default class UnlikePostService {

  constructor(
    @inject('LikesRepository')
    private likesRepository: ILikesRepository
  ) { }

  public async run(user_id: string, post_id: string): Promise<{ message: string }> {
    const like = await this.likesRepository.get(user_id, post_id)

    if (!like) throw new AppError('This like entry could not be found')

    await this.likesRepository.unlike(like.id)

    return { message: "Unliked post successfully!" }
  }
}