import { getGoogleVoice } from "./speech.model"

export function getSpeechByRate (word: string, languageCode: string, voice: string, speakingRate: number) {
  return getGoogleVoice(word, languageCode, voice, speakingRate)
}

