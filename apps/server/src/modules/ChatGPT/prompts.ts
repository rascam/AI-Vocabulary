
import { User } from '../../lib/types'
import { languages } from '../../lib/languagesConfig'
import { amountOfNewWords } from '../../lib/const'

export function createPromptForTopic(user: User, topic: string): string {
let prompt = ""

  const srcLang = `${languages[user.userSrcLang].language}`
  const srcLang2 = `${languages[user.userSrcLang].language2 || ""}`
  const targetLang = `${languages[user.userTargetLang].language}`
  const targetLang2 = `${languages[user.userTargetLang].language2 || ""}`
  
  prompt += `Write a numbered vocabulary list of ${amountOfNewWords} new vocabulary items: `
  prompt += `${Math.floor(amountOfNewWords*0.67)} new ${srcLang2 || srcLang} words with their articles but WITHOUT explanations or parentheses, `
  prompt += `and ${amountOfNewWords - Math.floor(amountOfNewWords*0.67)} verbs as infinitive, `

  if (topic) {
    prompt += `all around the topic "${topic}", `
  }
  prompt += `for someone ${srcLang2 || srcLang} who is learning ${
    targetLang2 || ""
  } ${targetLang} on a ${user.userLevel} level.`

  if (user.userLevel === "advanced") {
    prompt += ` Advanced means, that you list items which are NOT so common and easy.`
  }
 
  if (user.words.length > 0) {
    prompt += `\nEXCLUDE the following words:\n`
    for (let i = 0; i < user.words.length; i++) {
          prompt += `${user.words[i].srcWord}\n`
    } 
  }

  prompt += `\n
  The numbered list has to be in the format:\n
  #. ${srcLang} $$ ${targetLang}\n`

  console.log(prompt)

  return prompt
}



export function createPromptForEnglishPhotoSearchTerms(user: User, wordPairList: [string, string][]) {
  
    const srcLang = `${languages[user.userSrcLang].language}`

    let prompt = ""
    prompt += `Translate this list from ${srcLang} into English. Keep the format of the list!\n\n`
  
    for (let i = 0; i < wordPairList.length; i++) {
      prompt += `${i + 1}. ${wordPairList[i][0]}\n`
    }
  
    return prompt
  }


export function createPromptForSingleTranslation(user: User, term: string): string {
  let prompt = ""
  
    const srcLang = `${languages[user.userSrcLang].language}`
    const srcLang2 = `${languages[user.userSrcLang].language2 || ""}`
    const targetLang = `${languages[user.userTargetLang].language}`
    const targetLang2 = `${languages[user.userTargetLang].language2 || ""}`
    
    prompt += `Please translate the  ${srcLang2 || srcLang} expression\n
    "${term}"\n
    into ${
      targetLang2 || ""
    } ${targetLang}. ONLY answer with the pure translation.\n\n`
  
    return prompt
  }



