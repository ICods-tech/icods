const extractNameAndSurname = (fullName: string) => {
  const [name, surname] = (fullName).split(' ')
  return { name, surname }
}

export default extractNameAndSurname