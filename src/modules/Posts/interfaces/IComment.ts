import Post from '@modules/Posts/typeorm/models/post'

export default interface ILikeDTO {
  userId: string
  post: Omit<Post, 'created_at' | 'updated_at' | 'likes' | 'comments'>
  content: string
}
