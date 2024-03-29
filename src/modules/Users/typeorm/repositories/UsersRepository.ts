import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import IUserRepository from '@modules/Users/interfaces/IUserRepository'
import { Repository, getRepository } from 'typeorm'
import IUser from '@modules/Users/interfaces/IUser'
import User from '../models/user'

export default class UserRepository implements IUserRepository {

  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository('users')
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id, { relations: ['receivedQRCodes'] })

    return user || undefined
  }

  public async findByIds(ids: string[]): Promise<[] | User[]> {
    const users = await this.ormRepository.findByIds(ids, {
      select: ['id', 'name', 'email', 'visibility']
    })

    return users
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { username } })

    return user || undefined
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } })

    return user || undefined
  }


  public async findAllUserQRCodes(user_id: string): Promise<QRCode[] | [] | undefined> {
    const userQrcodes = await this.ormRepository.findOne(user_id, {
      relations: ['qrcodes', 'qrcodes.receivedUser'],
    })

    return userQrcodes?.qrcodes || undefined
  }

  public async deleteUser(user_id: string): Promise<void> {
    await this.ormRepository.delete(user_id)
  }

  public async create(data: IUser): Promise<User> {
    const user = this.ormRepository.create(data)
    await this.ormRepository.save(user)

    return user
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user)

    return user
  }
}
