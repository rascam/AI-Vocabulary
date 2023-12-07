
import dotenv from 'dotenv'
dotenv.config()
const keysEnvVar = process.env['GOOGLE_CREDS'];
if (!keysEnvVar) {
  throw new Error('The $CREDS environment variable was not found!');
}
const keys = JSON.parse(keysEnvVar);
console.log({keys})

import { auth } from 'google-auth-library'

export async function getGoogleVoice (word: string, languageCode: string, selectedVoice: string, speakingRate: number) {
  console.log(`word: ${word}, languagecode: ${languageCode}, selectedVoice: ${selectedVoice}, speakingRate: ${speakingRate}`)

  if (
    (languageCode === "ja-jp" ||
      languageCode === "ko-kr" ||
      languageCode === "zh-cn" ||
      languageCode === "ru-ru") &&
    word.match(/.+\(.+\)/g)
  ) {
    const filtered = word.split("(")
    word = filtered[0]
  }

  try {
    // load the JWT or UserRefreshClient from the keys
    const googleSpeechClient = auth.fromJSON(keys);
   

    // interface GoogleClient extends JSONClient {
    // scopes?: string[]
    // }
    // interface GoogleClient extends UserRefreshClient {
    //   scopes?: string[]
    // }

    // set the scopes
    //@ts-ignore
    googleSpeechClient.scopes = ['https://www.googleapis.com/auth/cloud-platform']

  const request: any = {
    input: { text: word },
    voice: { languageCode: languageCode, name: selectedVoice },
    audioConfig: { audioEncoding: "MP3", speakingRate: speakingRate },
  }
  
  const url = 'https://texttospeech.googleapis.com/v1/text:synthesize'
  if (googleSpeechClient) {
  const response = await googleSpeechClient.request({url, method: 'POST', body: JSON.stringify(request)})
  if (response.data) {
  
    // @ts-ignore
    const audioContentBuffer = Buffer.from(response.data.audioContent, 'base64');
    const base64String = audioContentBuffer.toString('base64');

    return base64String
}
}
} catch (e) {
      console.log(e)
    }
}
