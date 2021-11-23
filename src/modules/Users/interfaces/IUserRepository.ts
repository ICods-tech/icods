import IUser from './IUser'
import User from '@modules/Users/typeorm/models/user'
import QRCode from '@modules/QRCodes/typeorm/models/QRCode'

export default interface IUserRepository {
  deleteUser(id: string): Promise<void>
  findById(id: string): Promise<User | undefined>
  findByIds(ids: string[]): Promise<[] | User[]>
  findByEmail(email: string): Promise<User | undefined>
  findByUsername(username: string): Promise<User | undefined>
  findAllUserQRCodes(user_id: string): Promise<QRCode[] | [] | undefined>
  create(data: IUser): Promise<User>
  save(user: User): Promise<User>
}
