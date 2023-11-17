import prisma from "../../lib/prisma";
import { hashingPassword } from "../Encryption/encryption.model";

import { UserCreation } from "../../lib/types";

// export async function userEmailExists(email: string) {
//   const user = await prisma.user.findUnique({
//     where: {
//       email
//     }
//   })
//   return user? true : false
// }

export async function getUserByEmail (email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })
  return user
}

export async function createUser(user: UserCreation) {
  
  const createUser = await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      hashedPassword,
      userSrcLang: user.userSrcLang,
      userTargetLang: user.userTargetLang
    }
  })
  return createUser
}