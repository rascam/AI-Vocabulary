import prisma from "../../lib/prisma";

import { UserCreation, User } from "../../lib/types";

export async function userEmailExists(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })
  return user? true : false
}

export async function getUserById (userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      words: true
    }
  })

  if (!user) {
    throw new Error("User not found")
  }

  return user
}

export async function getHashByUserEmail (email: string): Promise<string> {
  const response = await prisma.user.findUnique({
    where: {
      email
    },
    select: {
      hashedPassword: true,
      id: true
    }
  })

  if (!response) {
    throw new Error("User not found")
  }

  return response.hashedPassword
}

export async function createUser(user: UserCreation) {
  
  const createUser = await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      hashedPassword: user.hashedPassword,
      userSrcLang: user.userSrcLang,
      userTargetLang: user.userTargetLang
    }
  })
  return createUser
}