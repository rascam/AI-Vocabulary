export default function playVoice(audioString: string) {
  const audio = new Audio(`data:audio/mp3;base64,${audioString}`)
  audio.play()
}

