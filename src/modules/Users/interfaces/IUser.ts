export default interface IUser {
  name: string;
  username: string;
  email: string;
  password: string;
  visibility: boolean;
  tempPassword?: string;
}
