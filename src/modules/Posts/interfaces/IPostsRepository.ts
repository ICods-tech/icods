import Post from '@modules/Posts/typeorm/models/post'
import IPostDTO from './IPost'

export default interface IPostsRepository {
  create(data: IPostDTO): Promise<Post>;
  get(id: string): Promise<Post | undefined>;
  delete(id: string): Promise<void>;
  save(postEntry: Post): Promise<Post>;
}
