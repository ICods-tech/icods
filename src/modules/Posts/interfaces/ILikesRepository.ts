import Post from '@modules/Posts/typeorm/models/post'
import Like from '../typeorm/models/like'
import ILike from './ILike'
import { DeleteResult } from 'typeorm'

export default interface ILikeRepository {
  like(data: ILike): Promise<Like>;
  unlike(id: string): Promise<void | DeleteResult>;
  get(user_id: string, post_id: string): Promise<Like | undefined>;
  save(likeEntry: Like): Promise<Like>;
}
