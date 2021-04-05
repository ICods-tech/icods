import IUserDTO from '../DTOs/IUserDTO'
import User from '@modules/Users/infra/typeorm/models/user'

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>
  findByIds(ids: string[]): Promise<[] | User[]>
  findByEmail(email: string): Promise<User | undefined>
  findByUsername(username: string): Promise<User | undefined>
  create(data: IUserDTO): Promise<User>
  save(user: User): Promise<User>
}
