import openai from './openai'
import { temperatureGPT } from '../../lib/const'
import { languages } from "../../lib/languagesConfig"


export async function createChatCompletion(prompt: string, userSrcLang: string, userTargetLang: string) {

  const srcLang = `${languages[userSrcLang].language}`
  const srcLang2 = `${languages[userSrcLang].language2 || ""}`
  const targetLang = `${languages[userTargetLang].language}`
  const targetLang2 = `${languages[userTargetLang].language2 || ""}`

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: temperatureGPT,
    max_tokens: 250,
    messages: [
      {
          role: "system",
          content: `I am ${srcLang2 || srcLang} and you are my ${
            targetLang2 || targetLang
          } language teacher`,
        },
        {"role": "user", "content": prompt}],
    });
  
    return chatCompletion.choices[0].message
  }