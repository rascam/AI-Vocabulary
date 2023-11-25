import { defaultImg } from '../lib/const'
import { Word } from '../lib/types'



function CardList({words, slowSpeech}: {words: Word[], slowSpeech: boolean}) {

  function playVoice(audioString: string) {
    console.log({slowSpeech})
    const audio = new Audio(`data:audio/mp3;base64,${audioString}`)
    audio.play()
  }

  console.log({words})
  return (
    <div className="vocContainer">
      {words.map((word: Word) => (
        <div key={word.id} className={`card card${word.bin}`}
          style={{
          background: `linear-gradient(#19778d99, #19778d99), url(${word.imgUrl || defaultImg})`,
          backgroundSize: 'cover',
        }}>
        <p>{word.srcWord}</p>
          <div className="thinLine"></div>
          <div className="translation">
            <p>{word.targetWord}</p>
          </div>
          <div className="playButton" id="playButton">
          <i onClick={() => playVoice(slowSpeech ? word.voiceSlow : word.voice)} className="fa-solid fa-circle-play"></i>
          </div>
          <div className="credits" >
            <a href="https://unsplash.com" target="_blank">
            {word.credits} - Unsplash</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardList