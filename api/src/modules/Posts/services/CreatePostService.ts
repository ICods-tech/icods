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

  public async run(userId: string, qrcodeId: string): Promise<Post> {
    console.log(userId, qrcodeId)
    if (!userId || !qrcodeId) {
      throw new Error("All fields must be filled!")
    }

    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new Error("Trying to post with an user that doesn't exist")
    }

    const qrcode = await this.qrcodesRepository.get(qrcodeId)
    console.log(qrcode)

    if (!qrcode || !qrcode.enabled) {
      throw new Error("Trying to post a QR code that doesn't exist, or isn't activated!")
    } else if (qrcode.user?.id !== userId) {
      throw new Error("This QR Code does not belong to that user!")
    }

    const post = await this.postsRepository.create({
      userId,
      qrcodeId
    })

    return post
  }
}
