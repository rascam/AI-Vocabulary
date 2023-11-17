
export interface User {
  id: number
  name?: string
  email: string
  hashedPassword: string
  userSrcLang: string
  userTargetLang: string
  userLevel: string
  learningDirection: string
  slowSpeech: boolean
  words: Word[]
  score: number
}

export interface UserCreation {
  email: string
  name?: string
  password: string
  userSrcLang: string
  userTargetLang: string
  userLevel: string
}

export interface Word {
  id: number
  srcWord: string
  targetWord: string
  imgUrl: string
  credits: string
  voice: string
  voiceSlow: string
  bin: number
}