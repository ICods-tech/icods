import AppError from '../../../infra/error/AppError'
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import { inject, injectable } from 'tsyringe'
import Post from '../typeorm/models/post'
import IPostsRepository from '../interfaces/IPostsRepository'
import IQRCodesRepository from '@modules/QRCodes/interfaces/IQRCodesRepository'

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

  public async run(userId: string, qrcodeId: string): Promise<Post> {
    console.log(userId, qrcodeId)
    if (!userId || !qrcodeId) {
      throw new AppError("All fields must be filled!")
    }

    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new AppError("Trying to post with an user that doesn't exist")
    }

    const qrcode = await this.qrcodesRepository.get(qrcodeId)
    console.log(qrcode)

    if (!qrcode || !qrcode.enabled) {
      throw new AppError("Trying to post a QR code that doesn't exist, or isn't activated!")
    } else if (qrcode.user?.id !== userId) {
      throw new AppError("This QR Code does not belong to that user!")
    }

    const post = await this.postsRepository.create({
      userId,
      qrcodeId
    })

    return post
  }
}
