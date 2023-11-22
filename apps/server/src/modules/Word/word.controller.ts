import { userIdExists } from "../User/user.model"
import { createWord } from "./word.model"
import { Word } from '../../lib/types'
import { createChatCompletion } from "../ChatGPT/chatGPT.model"


export async function createWordsByTopic(userId: string, topic: string) {
  const userExists = await userIdExists(userId)

  if (!userExists) {
      throw new Error("User doesn't exist")
  }

  // topic=topic.trim()
  if (topic === "") {
    throw new Error("Topic can't be empty")
  }

  
  const chatCompletion = await createChatCompletion(topic)
  
 

  let createdWords: Word[] = []

  for (let i = 0; i < 10; i++) {
    const createdWord = await createWord(userId, topic)
    createdWords.push(createdWord)
  }


  return createdWords
}
