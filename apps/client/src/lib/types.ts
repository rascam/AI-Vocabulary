export interface User {
  id: string
  email: string
  name?: string
  userSrcLang: string
  userTargetLang: string
  userLevel: string
  userVocCount: number
  score: number
  learningDirection: string
  slowSpeech: boolean
  // words: Word[]
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

  export type DisplaySwitch = {
    settings: boolean
    topicInput: boolean
    stats: boolean
    vocList: boolean
  }