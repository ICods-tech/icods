import AppError from '@shared/error/AppError'
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import { inject, injectable } from 'tsyringe'
import Post from '../infra/typeorm/models/post'
import IPostsRepository from '../IRepositories/IPostsRepository'
import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository'

@injectable()
export default class CreatePostService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('QRCodeRepository')
    private qrcodesRepository: IQRCodesRepository,

    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) { }

  public async run(user_id: string, qrcode_id: string): Promise<Post> {
    if (!user_id || !qrcode_id) {
      throw new Error("All fields must be filled!")
    }

    const user = await this.usersRepository.findById(user_id)

    if (!user) {
      throw new AppError("Trying to follow an user that doesn't exist")
    }

    const qrcode = await this.qrcodesRepository.get(qrcode_id)

    if (!qrcode || !qrcode.enabled) {
      throw new AppError("Trying to post a QR code that doesn't exist, or it isn't activated!")
    }

    const post = await this.postsRepository.create({
      user_id,
      qrcode_id
    })

    return post
  }
}
