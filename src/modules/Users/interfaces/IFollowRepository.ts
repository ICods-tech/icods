import Follow from '@modules/Users/typeorm/models/follow'
import IFollow from '@modules/Users/interfaces/IFollow';

export default interface IFollowRepository {
  follow(data: IFollow): Promise<Follow>
  unfollow(id: string, followingId: string): Promise<void>
  rejectFollower(id: string): Promise<void>
  checkFollowing(id: string, followingId: string): Promise<boolean>;
  save(followEntry: Follow): Promise<Omit<Follow, 'id' | 'created_at'>>;
  findById(id: string): Promise<Follow | undefined>;
  getAllFollowers(id: string): Promise<{ followers: Follow[], followersCount: Number }>;
  getAllFollowing(id: string): Promise<{ following: Follow[], followingCount: Number }>;
}
