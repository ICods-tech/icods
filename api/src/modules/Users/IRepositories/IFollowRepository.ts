import Follow from '@modules/Users/infra/typeorm/models/follow'
import IFollowDTO from '@modules/Users/DTOs/IFollowDTO';

export default interface IFollowRepository {
  follow(data: IFollowDTO): Promise<Follow>
  unfollow(id: string, followingId: string): Promise<void>
  checkFollowing(id: string, followingId: string): Promise<boolean>;
  save(followEntry: Follow): Promise<Omit<Follow, 'id' | 'created_at'>>;
  findById(id: string): Promise<Follow | undefined>;
  getAllFollowers(id: string): Promise<{ followers: Follow[], followersCount: Number }>;
  getAllFollowing(id: string): Promise<{ following: Follow[], followingCount: Number }>;
}