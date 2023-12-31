import { Level } from "@prisma/client"


export interface User {
  id: string
  email: string
  hashedPassword: string
  name?: string
  userSrcLang: string
  userTargetLang: string
  userLevel: string
  learningDirection: string
  slowSpeech: boolean
  words: Word[]
  userVocCount: number
  score: number
}

export interface UserRegistrationBody {
  email: string
  password: string
  name?: string
  userSrcLang: string
  userTargetLang: string
  userLevel: Level
}

export interface UserCreation {
  email: string
  name?: string | null
  hashedPassword: string
  userSrcLang: string
  userTargetLang: string
  userLevel: Level
}

export interface Word {
  id: number
  // userId: string
  srcWord: string
  targetWord: string
  imgUrl: string | undefined
  credits: string | undefined
  creditsUrl: string | undefined
  voice: string
  voiceSlow: string
  bin: number
}