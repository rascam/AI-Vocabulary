
import { User } from "../../lib/types"

import { createChatCompletion } from "./chatGPT.model"
import { parseWordList } from "./parsing"
import { createPromptForTopic, createPromptForSingleTranslation, createPromptForEnglishPhotoSearchTerms } from "./prompts"

export async function createWordListByTopic(user: User, topic: string) {
  
  const prompt = createPromptForTopic(user, topic)

  const chatCompletion = await createChatCompletion(prompt, user.userSrcLang, user.userTargetLang, user.userLevel)

  if (!chatCompletion.content) {
    throw new Error("Chat completion not successful")
  }
  console.log(chatCompletion.content)
  const newWordList = parseWordList(chatCompletion.content)

  return newWordList
}


export async function createEnglishPhotoSearchTerms(user: User, wordPairList: [string, string][]): Promise<string[]> {
  
  const prompt = createPromptForEnglishPhotoSearchTerms(user, wordPairList)

  const chatCompletion = await createChatCompletion(prompt, user.userSrcLang, user.userTargetLang, user.userLevel)

  if (!chatCompletion.content || chatCompletion.role !== "assistant") {
    throw new Error("Chat completion not successful")
  }
    const englishWords = chatCompletion.content
      .split(/\d+\. /gm)
      .map((e) => e.replace(/^(The |a |the |A )/gim, "").trim())

    if (englishWords[0].trim() === "") englishWords.shift()

    for (let i = 0; i < englishWords.length; i++) {
      console.log(`englishWords[${i}]: `, englishWords[i])
  }
  return englishWords
}


export async function createSingleTranslation(user: User, term: string) {
  
  const prompt = createPromptForSingleTranslation(user, term)

  const chatCompletion = await createChatCompletion(prompt, user.userSrcLang, user.userTargetLang, user.userLevel)

  if (!chatCompletion.content) {
    throw new Error("Chat completion not successful")
  }

  const translation = chatCompletion.content.replace(/"/g, "")

  const newWord = [term, translation]

  return newWord
}