import bcrypt from 'bcrypt'
import IHashProvider from '../model/IHashProvider'

export default class HashProvider implements IHashProvider {

  public async encrypt(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10)

    return hashedPassword
  }

  public async compareHash(password: string, hashedPassword: string): Promise<boolean> {
    const passwordComparison = await bcrypt.compare(password, hashedPassword)

    return passwordComparison
  }
}
