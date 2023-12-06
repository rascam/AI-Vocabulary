import prisma from "../../lib/prisma"


export async function getWordsByUserId (userId: string) {
  const words = await prisma.word.findMany({
    where: {
      userId
    }
  })
  
  if (!words) {
    throw new Error("No words could be retrieved")
  }
  return words
}

type WordToCreate = {
  userId: string
  srcWord: string
  targetWord: string
  imgUrl: string | undefined
  credits: string | undefined
  creditsUrl: string | undefined
  // voice: string | undefined
  // voiceSlow: string | undefined
}

export async function createWord(wordToCreate: WordToCreate) {
  const createdWord = await prisma.word.create({
    data: {
      userId: wordToCreate.userId,
      srcWord: wordToCreate.srcWord,
      targetWord: wordToCreate.targetWord,
      imgUrl: wordToCreate.imgUrl,
      credits: wordToCreate.credits,
      creditsUrl: wordToCreate.creditsUrl,
      // voice: wordToCreate.voice,
      // voiceSlow: wordToCreate.voiceSlow,
      bin: 0
    }
  })
  if (!createdWord) {
      throw new Error("DB Error; Word not created")
  }
  return createdWord
}

export async function patchSingleWordProperty(wordId: number, key: string, value: string | number) {
  const updatedUser = await prisma.word.update({
    where: {
      id: wordId
    },
    data: {
      [key]: value
    }
  })
  return updatedUser
}

