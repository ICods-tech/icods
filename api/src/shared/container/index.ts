import { container } from 'tsyringe'

import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import UsersRepository from '@modules/Users/infra/typeorm/repositories/UsersRepository'

import IFollowRepository from '@modules/Users/IRepositories/IFollowRepository'
import FollowersRepository from '@modules/Users/infra/typeorm/repositories/FollowersRepository'

import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository'
import QRCodeRepository from '@modules/QRCodes/infra/typeorm/repositories/QRCodesRepository'

import IPostsRepository from '@modules/Posts/IRepositories/IPostsRepository'
import PostRepository from '@modules/Posts/infra/typeorm/repositories/postsRepository'

import ILikesRepository from '@modules/Posts/IRepositories/ILikesRepository'
import LikesRepository from '@modules/Posts/infra/typeorm/repositories/likesRepository'

// import ICommentsRepository from '@modules/Posts/IRepositories/ICommentsRepository'
// import CommentsRepository from '@modules/Posts/infra/typeorm/repositories/commentsRepository'

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostRepository
)

container.registerSingleton<ILikesRepository>(
  'LikesRepository',
  LikesRepository
)

// container.registerSingleton<ICommentsRepository>(
//   'CommentsRepository',
//   CommentsRepository
// )

container.registerSingleton<IFollowRepository>(
  'FollowersRepository',
  FollowersRepository
)

container.registerSingleton<IQRCodesRepository>(
  'QRCodeRepository',
  QRCodeRepository
)
