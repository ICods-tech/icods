import IUserRepository from "@modules/Users/interfaces/IUserRepository"
import AppError from "../../../infra/error/AppError"

export async function getUserById(userId: string, usersRepository: IUserRepository) {
  const user = await usersRepository.findById(userId)
  if (!user) throw new AppError('User with this ID does not exist')

  return user
}
