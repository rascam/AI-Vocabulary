import { defaultImg } from '../lib/const'
import { Word } from '../lib/types'

function CardList(words: Word[]) {

  return (
    <div className="">
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
          <i className="fa-solid fa-circle-play"></i>
          <audio src={`data:audio/mp3;base64,${word.voice}`}>
          </audio>
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