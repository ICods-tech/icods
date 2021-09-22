import { container } from 'tsyringe'

import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import UsersRepository from '@modules/Users/typeorm/repositories/UsersRepository'

import IFollowRepository from '@modules/Users/interfaces/IFollowRepository'
import FollowersRepository from '@modules/Users/typeorm/repositories/FollowersRepository'

import IQRCodesRepository from '@modules/QRCodes/interfaces/IQRCodesRepository'
import QRCodeRepository from '@modules/QRCodes/typeorm/repositories/QRCodesRepository'

import IPostsRepository from '@modules/Posts/interfaces/IPostsRepository'
import PostRepository from '@modules/Posts/typeorm/repositories/postsRepository'

import ILikesRepository from '@modules/Posts/interfaces/ILikesRepository'
import LikesRepository from '@modules/Posts/typeorm/repositories/likesRepository'

import ICommentsRepository from '@modules/Posts/interfaces/ICommentsRepository'
import CommentsRepository from '@modules/Posts/typeorm/repositories/commentsRepository'

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

container.registerSingleton<ICommentsRepository>(
  'CommentsRepository',
  CommentsRepository
)

container.registerSingleton<IFollowRepository>(
  'FollowersRepository',
  FollowersRepository
)

container.registerSingleton<IQRCodesRepository>(
  'QRCodeRepository',
  QRCodeRepository
)