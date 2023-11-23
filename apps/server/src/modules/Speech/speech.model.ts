
import googleSpeech from "./googleSpeech"

// google text to speech api. input: text, output: audio as string
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

  const request: any = {
    input: { text: word },
    voice: { languageCode: languageCode, name: selectedVoice },
    audioConfig: { audioEncoding: "MP3", speakingRate: speakingRate },
  }

  const [response] = await googleSpeech.synthesizeSpeech(request)

  if (response.audioContent) {
    // const audio: string | Uint8Array = response.audioContent
    // const base64String = audio.toString("base64")
    // @ts-ignore
    const audioContentBuffer = Buffer.from(response.audioContent, 'base64');
    const base64String = audioContentBuffer.toString('base64');

    return base64String
  }
}
