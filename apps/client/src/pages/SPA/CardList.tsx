import { defaultImg } from '../../data/const'
import { Word } from '../../lib/types'
import playVoice from '../../utils/playVoice'



function CardList({words, slowSpeech}: {words: Word[], slowSpeech: boolean}) {

  return (
    <div className="vocContainer">
      {words.map((word: Word) => (
        <div key={word.id} className={`card card${word.bin}`}
          onClick={() => playVoice(slowSpeech ? word.voiceSlow : word.voice)}
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
          <i className="fa-solid fa-circle-play"></i>
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