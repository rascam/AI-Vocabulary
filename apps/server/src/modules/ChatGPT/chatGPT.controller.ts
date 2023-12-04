
import { User } from "../../lib/types"

import { createChatCompletion } from "./chatGPT.model"
import { parseWordList } from "./parsing"
import { createPromptForTopic, createPromptForSingleTranslation } from "./prompts"

export async function createWordListByTopic(user: User, topic: string) {
  
  const prompt = createPromptForTopic(user, topic)

  console.log(prompt)

  const chatCompletion = await createChatCompletion(prompt, user.userSrcLang, user.userTargetLang)

  console.log(chatCompletion)

  if (!chatCompletion.content) {
    throw new Error("Chat completion not successful")
  }
  const newWordList = parseWordList(chatCompletion.content)

  return newWordList
}



export async function createSingleTranslation(user: User, term: string) {
  
  const prompt = createPromptForSingleTranslation(user, term)

  console.log(prompt)

  const chatCompletion = await createChatCompletion(prompt, user.userSrcLang, user.userTargetLang)

  console.log(chatCompletion)

  if (!chatCompletion.content) {
    throw new Error("Chat completion not successful")
  }

  const translation = chatCompletion.content.replace(/"/g, "")

  const newWord = [term, translation]

  return newWord
}