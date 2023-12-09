import { compareHash, hashingPassword } from "../../modules/Encryption/encryption.model"
import { userEmailExists , getUserBasicInfoById, getUserByEmail,createUser, patchSingleUserProperty } from "../../modules/User/user.model"

import { UserRegistrationBody } from "../../lib/types"


export async function getUser(userId: string) {
  return getUserBasicInfoById(userId)
}

export async function updateUserProperty(userId: string, key: string, data: string | number) {
  return patchSingleUserProperty(userId, key, data)
}

export async function registerUser(user: UserRegistrationBody) {

  user.email.trim().toLowerCase()
  const userExists = await userEmailExists(user.email)

  if (userExists) {
      throw new Error("User already exists")
  }
  const hash = await hashingPassword(user.password)
  const createdUser = await createUser({
    name: user.name,
    email: user.email,
    userSrcLang: user.userSrcLang,
    userTargetLang: user.userTargetLang,
    userLevel: user.userLevel,
    hashedPassword: hash
  })
  if (!createdUser) {
      throw new Error("User not created")
  }
  return createdUser.id
}


export async function loginUser(email: string, password: string) {

  email.trim().toLowerCase()
  const { hashedPassword, id } = await getUserByEmail(email)

  if (!hashedPassword) {
      throw new Error("User not found")
  }

  const match = await compareHash(password, hashedPassword);

  if(!match) {
    throw new Error("Incorrect password")
  }

  console.log("successful login")

  return { userId: id }
}