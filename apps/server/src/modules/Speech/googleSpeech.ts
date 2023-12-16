/* import dotenv from 'dotenv'
dotenv.config()

const keysEnvVar = process.env['GOOGLE_CREDS'];
if (!keysEnvVar) {
  throw new Error('The $GOOGLE_CREDS environment variable was not found!');
}

const keys = JSON.parse(keysEnvVar);



import { auth } from 'google-auth-library'
// interface GoogleClient extends JSONClient {
//   scopes?: string[]
// }
// interface GoogleClient extends UserRefreshClient {
//   scopes?: string[]
// }
// import {JSONClient} from 'google-auth-library'
async function main() {
  // load the JWT or UserRefreshClient from the keys
  const client = auth.fromJSON(keys);
  console.log({client})

  // set the scopes
  //@ts-ignore
  client.scopes = ['https://www.googleapis.com/auth/cloud-platform']
  const url = `https://texttospeech.googleapis.com/v1/voices?languageCode=de`
  const res = await client.request({url})
  console.log("response from google auth ",res.data)

  return client
}

let googleSpeech = undefined
try {
  googleSpeech =  main()
} catch (e) {
  console.log(e)
}

export default googleSpeech
// import textToSpeech from "@google-cloud/text-to-speech"
// const googleSpeech = new textToSpeech.TextToSpeechClient()

 */