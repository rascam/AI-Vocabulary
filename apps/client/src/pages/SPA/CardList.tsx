import { defaultImg, UNSPLASH_APP_NAME } from '../../data/const'
import { Word } from '../../lib/types'
import playVoice from '../../utils/playVoice'

console.log({UNSPLASH_APP_NAME})
console.log({defaultImg})


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
          <div className="thinLine mt-1 mb-1"></div>
          <div className="translation">
            <p>{(word.targetWord).slice(0, 80)}</p>
          </div>
          <div className="playButton mt-3" id="playButton">
          <i className="fa-solid fa-volume-high"></i>
          </div>
          {word.imgUrl &&
          <div className="credits" >
            <a href={`${word.creditsUrl}?utm_source=${UNSPLASH_APP_NAME}&utm_medium=referral` || `https://unsplash.com/?utm_source=${UNSPLASH_APP_NAME}&utm_medium=referral`} target="_blank">
            {word.credits}</a>
            <span> on </span>
            <a href={`https://unsplash.com/?utm_source=${UNSPLASH_APP_NAME}&utm_medium=referral`} target="_blank">Unsplash</a>
          </div>}
        </div>
      ))}
    </div>
  )
}

export default CardList