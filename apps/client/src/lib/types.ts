export interface User {
  id: string
  email: string
  name?: string
  userSrcLang: string
  userTargetLang: string
  userLevel: string
  learningDirection: string
  slowSpeech: boolean
  words: Word[]
}

export interface Word {
  id: string
  srcWord: string
  targetWord: string
  imgUrl: string
  voice: string
  voiceSlow: string
  bin: number
  credits: string}