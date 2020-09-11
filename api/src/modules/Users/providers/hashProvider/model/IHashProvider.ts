export default interface IHashProvider {
  encrypt(password: string): Promise<string>;
  compareHash(password: string, hash: string): Promise<boolean>;
}
