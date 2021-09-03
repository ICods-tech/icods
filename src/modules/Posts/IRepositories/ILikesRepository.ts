import Post from '@modules/Posts/infra/typeorm/models/post'
import Like from '../infra/typeorm/models/like'
import ILikeDTO from '../DTOs/ILikeDTO'
import { DeleteResult } from 'typeorm'

export default interface ILikeRepository {
  like(data: ILikeDTO): Promise<Like>;
  unlike(id: string): Promise<void | DeleteResult>;
  get(user_id: string, post_id: string): Promise<Like | undefined>;
  save(likeEntry: Like): Promise<Like>;
}