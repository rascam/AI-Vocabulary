import dotenv from 'dotenv'
dotenv.config()

const keysEnvVar = process.env['GOOGLE_CREDS'];
if (!keysEnvVar) {
  throw new Error('The $CREDS environment variable was not found!');
}
console.log({keysEnvVar})
const keys = JSON.parse(keysEnvVar);
console.log({keys})


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
  const url = `https://dns.googleapis.com/dns/v1/projects/${keys.project_id}`
  const res = await client.request({url})
  console.log("response from google auth ",res.data)
}
main().catch(console.error)


import textToSpeech from "@google-cloud/text-to-speech"
const googleSpeech = new textToSpeech.TextToSpeechClient()

export default googleSpeech