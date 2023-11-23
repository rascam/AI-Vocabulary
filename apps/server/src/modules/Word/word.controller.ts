import { getUserById } from "../User/user.model"
import { createWord } from "./word.model"
import { Word, User } from '../../lib/types'
import { createWordListByTopic } from "../ChatGPT/chatGPT.controller"

export async function createWordsByTopic(userId: string, topic: string) {
  const user = await getUserById(userId) as User
  if (!user) {
      throw new Error("User doesn't exist")
  }
  if (topic === "") {
    throw new Error("Topic can't be empty")
  }

  const generatedWordPairs = await createWordListByTopic(user, topic)
  const createdWords: Word[] = []
  
  for (let i = 0; i < generatedWordPairs.length; i++) {
    const createdWord = await createWord(userId, generatedWordPairs[i][0], generatedWordPairs[i][1])
    createdWords.push(createdWord)
  }

  return createdWords
}
