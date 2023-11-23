
import { User } from '../../lib/types'
import { languages } from '../../lib/languagesConfig'
import { amountOfNewWords } from '../../lib/const'

export function createPromptForTopic(user: User, topic: string): string {
let prompt = ""

  const srcLang = `${languages[user.userSrcLang].language}`
  const srcLang2 = `${languages[user.userSrcLang].language2 || ""}`
  const targetLang = `${languages[user.userTargetLang].language}`
  const targetLang2 = `${languages[user.userTargetLang].language2 || ""}`
  
  prompt += `Write a numbered vocabulary list of ${amountOfNewWords} new words with their articles but without explanations, `
  if (topic) {
    prompt += `all around the topic "${topic}", `
  }
  prompt += `for someone ${srcLang2 || srcLang} who is learning ${
    targetLang2 || ""
  } ${targetLang} on a ${user.userLevel} level.`

  if (user.words.length > 0) {
    prompt += `Exclude the following words:\n`
    for (let i = 0; i < user.words.length; i++) {
          prompt += `${user.words[i].srcWord}\n`
    } 
  }

  prompt += `\n
  The numbered list has to be in the format:\n
  #. ${srcLang} $$ ${targetLang}\n`

  return prompt
}