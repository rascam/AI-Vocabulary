export interface GptSetting {
    [key: string]: {
      temp: number
      model: string
      maxTokens: number
      presencePenalty?: number
    }
  }

export const gptConfig: GptSetting = {
  beginner: {
    temp: 0.9,
    model: "gpt-3.5-turbo",
    maxTokens: 400,
    presencePenalty: 1.3,
  },
  advanced: {
    temp: 1,
    model: "gpt-4",
    maxTokens: 400,
    presencePenalty: 1.8,
  }, 
}