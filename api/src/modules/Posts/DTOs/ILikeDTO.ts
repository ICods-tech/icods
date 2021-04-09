import Post from '@modules/Posts/infra/typeorm/models/post'
import User from '@modules/Users/infra/typeorm/models/user';

export default interface ILikeDTO {
  userId: string
  post: Omit<Post, 'created_at' | 'updated_at' | 'likes' | 'comments'>
}