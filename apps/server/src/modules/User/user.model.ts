
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


export async function userIdExists(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
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


export async function getUserBasicInfoById (userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      words: false
    }
  })

  if (!user) {
    throw new Error("User not found")
  }

  return user
}

export async function patchSingleUserProperty(userId: string, key: string, value: string | number) {
  const updatedUser = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      [key]: value
    }
  })
  return updatedUser
}

type HashAndId = {
  hashedPassword: string
  id: string
}

export async function getUserByEmail (email: string): Promise<HashAndId> {
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

  return { hashedPassword: response.hashedPassword, id: response.id }
}

export async function createUser(user: UserCreation) {
  
  const createUser = await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      hashedPassword: user.hashedPassword,
      userSrcLang: user.userSrcLang,
      userTargetLang: user.userTargetLang,
      userLevel: user.userLevel
    }
  })
  return createUser
}