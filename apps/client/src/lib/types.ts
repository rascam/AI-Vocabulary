
export enum Level {
  beginner = "beginner",
  advanced = "advanced",
  sophisticated = "sophisticated"
}

export interface User {
  id: string
  email: string
  name?: string
  userSrcLang: string
  userTargetLang: string
  userLevel: Level
  userVocCount: number
  score: number
  learningDirection: string
  slowSpeech: boolean
  // words: Word[]
}

export interface UserCreation {
  name?: string
  email: string
  password: string
  userSrcLang: string
  userTargetLang: string
  userLevel: Level
}

export interface Word {
  id: string
  srcWord: string
  targetWord: string
  imgUrl: string
  credits: string
  creditsUrl: string
  voice: string
  voiceSlow: string
  bin: number
  }

  export type DisplaySwitch = {
    settings: boolean
    topicInput: boolean
    stats: boolean
    vocList: boolean
  }

