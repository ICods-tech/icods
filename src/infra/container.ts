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

import IBusinessRepository from '@modules/Business/interfaces/IBusinessRepository'
import BusinessRepository from '@modules/Business/typeorm/repositories/BusinessesRepository'

import IClientsRepository from '@modules/Business/interfaces/IClientsRepository'
import ClientsRepository from '@modules/Business/typeorm/repositories/ClientsRepository'

import LotsRepository from '@modules/Business/typeorm/repositories/LotsRepository'
import ILotsRepository from '@modules/Business/interfaces/ILotsRepository'

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

container.registerSingleton<IBusinessRepository>(
  'BusinessRepository',
  BusinessRepository
)

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository
)

container.registerSingleton<ILotsRepository>(
  'LotsRepository',
  LotsRepository
)
