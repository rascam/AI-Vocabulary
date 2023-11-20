import { userIdExists } from "../User/user.model"
import { createWord } from "./word.model"
import { Word } from '../../lib/types'


export async function createWordsByTopic(userId: string, topic: string) {
  const userExists = await userIdExists(userId)

  if (!userExists) {
      throw new Error("User doesn't exist")
  }

  let createdWords: Word[] = []

  for (let i = 0; i < 10; i++) {
    const createdWord = await createWord(userId, topic)
    createdWords.push(createdWord)
  }


  return createdWords
}
