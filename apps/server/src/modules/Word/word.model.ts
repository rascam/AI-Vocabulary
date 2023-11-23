import prisma from "../../lib/prisma"

export async function createWord(userId: string, srcWord: string, targetWord: string) {
  const createdWord = await prisma.word.create({
    data: {
      userId,
      srcWord,
      targetWord,
      imgUrl: "",
      credits: "Paul Platzhalter",
      voice: "",
      voiceSlow: "",
      bin: 0
    }
  })

  if (!createdWord) {
      throw new Error("DB Error; Word not created")
  }

  return createdWord
}


