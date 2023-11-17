import bcrypt from "bcrypt"

export async function hashingPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 10)
  return hashedPassword
}

export async function compareHash(password: string, hashedPassword: string) {
  const isMatch = await bcrypt.compare(password, hashedPassword)
  return isMatch
}
  
