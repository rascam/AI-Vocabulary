import textToSpeech from "@google-cloud/text-to-speech"
// import dotenv from 'dotenv'
// dotenv.config()

const googleSpeech = new textToSpeech.TextToSpeechClient()

export default googleSpeech