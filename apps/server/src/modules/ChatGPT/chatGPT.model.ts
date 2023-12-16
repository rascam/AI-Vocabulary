import openai from './openai'
import { languages } from "../../lib/languagesConfig"
import { gptConfig } from '../../lib/gptConfig'


export async function createChatCompletion(prompt: string, userSrcLang: string, userTargetLang: string, userLevel: string) {

  const srcLang = `${languages[userSrcLang].language}`
  const srcLang2 = `${languages[userSrcLang].language2 || ""}`
  const targetLang = `${languages[userTargetLang].language}`
  const targetLang2 = `${languages[userTargetLang].language2 || ""}`

  const assistantDefinition = `I am ${srcLang2 || srcLang} and you are my ${
    targetLang2 || targetLang
  } language teacher on a ${userLevel} level.\n\n`

  console.log("assistantDefinition: ", assistantDefinition)

  const chatCompletion = await openai.chat.completions.create({
    model: gptConfig[userLevel].model,
    temperature: gptConfig[userLevel].temp,
    max_tokens: gptConfig[userLevel].maxTokens,
    presence_penalty: gptConfig[userLevel].presencePenalty,
    messages: [
      {
          role: "system",
          content: assistantDefinition,
        },
        {"role": "user", "content": prompt}],
    });
  
    return chatCompletion.choices[0].message
  }