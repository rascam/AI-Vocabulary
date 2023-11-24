import { getUserById } from "../User/user.model"
import { createWord, getWordsByUserId } from "./word.model"
import { Word, User } from '../../lib/types'
import { createWordListByTopic } from "../ChatGPT/chatGPT.controller"
import { speakingRateNormal, speakingRateSlow } from "../../lib/const"
import { getGoogleVoice } from "../Speech/speech.model"
import { languages } from "../../lib/languagesConfig"
import { getImageByKeyword } from "../Image/image.model"


export async function getWords(userId: string) {
  return getWordsByUserId(userId)
}

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
  
  const language = user.userTargetLang
  const selectedVoice = languages[language].voice

  for (let i = 0; i < generatedWordPairs.length; i++) {
    const voice = await getGoogleVoice(generatedWordPairs[i][1], language, selectedVoice ,speakingRateNormal)
    const voiceSlow = await getGoogleVoice(generatedWordPairs[i][1], language, selectedVoice ,speakingRateSlow)
    const image = await getImageByKeyword(generatedWordPairs[i][0])
   
    const wordToCreate = {
      userId,
      srcWord: generatedWordPairs[i][0],
      targetWord: generatedWordPairs[i][1],
      imgUrl: image?.imgUrl,
      credits: image?.credits,
      creditsUrl: image?.creditsUrl,
      voice,
      voiceSlow
    }

    const createdWord = await createWord(wordToCreate)
    createdWords.push(createdWord)
  }
  return createdWords
}


