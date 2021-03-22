import { container } from 'tsyringe'

import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import UsersRepository from '@modules/Users/infra/typeorm/repositories/UsersRepository'

import IFollowRepository from '@modules/Users/IRepositories/IFollowRepository'
import FollowersRepository from '@modules/Users/infra/typeorm/repositories/FollowersRepository'

import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository'
import QRCodeRepository from '@modules/QRCodes/infra/typeorm/repositories/QRCodesRepository'

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IFollowRepository>(
  'FollowersRepository',
  FollowersRepository
)

container.registerSingleton<IQRCodesRepository>(
  'QRCodeRepository',
  QRCodeRepository
)
