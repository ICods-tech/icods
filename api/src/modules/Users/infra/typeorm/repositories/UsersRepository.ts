import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';
import IUserRepository from '@modules/Users/IRepositories/IUserRepository'
import { Repository, getRepository, } from 'typeorm'
import IUserDTO from '@modules/Users/DTOs/IUserDTO'
import User from '../models/user'

export default class UserRepository implements IUserRepository {

  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User)
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id)

    return user || undefined
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email }})

    return user || undefined
  }

  public async create(data: IUserDTO): Promise<User> {
    const user = this.ormRepository.create(data)
    await this.ormRepository.save(user)

    return user
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user)

    return user
  }
}
