import prisma from "../../lib/prisma"

export async function createWord(userId: string, topic: string) {
  const createdWord = await prisma.word.create({
    data: {
      userId,
      srcWord: topic,
      targetWord: topic,
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


