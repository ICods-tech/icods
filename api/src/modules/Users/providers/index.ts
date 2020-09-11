import { container } from 'tsyringe'
import HashProvider from './hashProvider/implementations/hashProvider'
import IHashProvider from './hashProvider/model/IHashProvider'

container.registerSingleton<IHashProvider>(
  'HashProvider',
  HashProvider
)
