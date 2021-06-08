import IUserRepository from "@modules/Users/IRepositories/IUserRepository"

export async function getUserById(userId: string, usersRepository: IUserRepository) {
  const user = await usersRepository.findById(userId)
  if (!user) throw new Error('User with this ID does not exist')

  return user
}
