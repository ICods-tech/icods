import Comment from '../infra/typeorm/models/comment'
import ICommentDTO from '../DTOs/ICommentDTO'

export default interface ICommentRepository {
  comment(data: ICommentDTO): Promise<Comment>;
  deleteComment(id: string): Promise<void>;
  updateCommentContent(id: string, content: string): Promise<Comment>;
  get(id: string): Promise<Comment | undefined>;
  checkAuthor(id: string, userId: string): Promise<boolean>;
  save(commentEntry: Comment): Promise<Comment>;
}