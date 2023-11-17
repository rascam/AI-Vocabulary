import { compareHash, hashingPassword } from "../../modules/Encryption/encryption.model"
import { userEmailExists , getUserById, getHashByUserEmail,createUser } from "../../modules/User/user.model"

import { UserRegistrationBody } from "../../lib/types"


export async function getUser(userId: string) {
  return getUserById(userId)
}

export async function registerUser(user: UserRegistrationBody) {
  const userExists = await userEmailExists(user.email)

  if (userExists) {
      throw new Error("User already exists")
  }

  const hash = await hashingPassword(user.password)
  const { hashedPassword, ...createdUser} = await createUser({ ...user, hashedPassword: hash })

  if (!createdUser) {
      throw new Error("User not created")
  }

  return createdUser
}


export async function login(email: string, password: string) {

  const hash = await getHashByUserEmail(email)

  if (!hash) {
      throw new Error("User not found")
  }

  const match = await compareHash(password, hash);

  if(match) {
      console.log("User logged in")
  }

  return true
}