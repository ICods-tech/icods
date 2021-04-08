import Post from '@modules/Posts/infra/typeorm/models/post'

export default interface ILikeDTO {
  user_id: string;
  post: Post;
}