import { container } from 'tsyringe'

import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import UsersRepository from '@modules/Users/infra/typeorm/repositories/UsersRepository'

import IQRCodesRepository from '@modules/QRCodes/IRepositories/IQRCodesRepository'
import QRCodeRepository from '@modules/QRCodes/infra/typeorm/repositories/QRCodesRepository'

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IQRCodesRepository>(
  'QRCodeRepository',
  QRCodeRepository
)
