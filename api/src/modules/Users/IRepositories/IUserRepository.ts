import IUserDTO from '../DTOs/IUserDTO'
import User from '@modules/Users/infra/typeorm/models/user'

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
  create(data: IUserDTO): Promise<User>
  save(user: User): Promise<User>
}
