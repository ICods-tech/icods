import Post from '@modules/Posts/infra/typeorm/models/post'
import Like from '../infra/typeorm/models/like'
import ILikeDTO from '../DTOs/ILikeDTO'

export default interface ILikeRepository {
  like(data: ILikeDTO): Promise<Like>;
  unlike(data: ILikeDTO): Promise<undefined>;
  save(likeEntry: Like): Promise<Like>;
}