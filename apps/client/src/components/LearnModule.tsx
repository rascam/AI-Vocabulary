import { useEffect, useState } from 'react'
import { defaultImg } from '../data/const'
import { Word } from '../lib/types'
import playVoice from '../utils/playVoice'
import learning from '../utils/learning'


function LearnModule({words, slowSpeech}: {words: Word[], slowSpeech: boolean}) {

  const [learnStack, setLearnStack] = useState<Word[]>([])

  useEffect(() => {
    setLearnStack(learning.initLearnStack(words.filter((word: Word) => word.bin < 4)))
  }, [words])

  return (
    <div className="flipCard">
        <input type="checkbox" id="flipCard" className="check" aria-hidden="true" />
        <div className={`content card${learnStack[0]?.bin}`} id="cardBorder">
          <div className="cardFront"
            style={{
              backgroundImage: `linear-gradient(#19778d99, #19778d99), url(${learnStack[0]?.imgUrl || defaultImg})`,
              backgroundSize: 'cover',
            }}>
            <div className="inner">

              <p id="cardFrontUpper" className="bold">{learnStack[0]?.srcWord}</p>
              <div className="yesNo">
                <label htmlFor="flipCard" className="buttonFlipCard" aria-hidden="true">
                  <i className="fa-regular fa-circle-question fa-2xl"></i>
                </label>
              </div>
            </div>
            <div className="credits">
              <a href="https://unsplash.com" target="_blank">{learnStack[0]?.credits} - Unsplash</a>
            </div>
          </div>
          <div className="cardBack" id="cardBack"
            style={{
              backgroundImage: `linear-gradient(#19778d99, #19778d99), url(${learnStack[0]?.imgUrl || defaultImg})`,
              backgroundSize: 'cover',
            }}>
            <div className="inner">
              <p className='thin' id="cardBackUpper">{learnStack[0]?.srcWord}</p>
              <div className="thinLine"></div>
              <div className="bold">
                <p id="cardBackLower">{learnStack[0]?.targetWord}</p>
              </div>

              <div onClick={() => playVoice(slowSpeech ? learnStack[0].voiceSlow : learnStack[0].voice)} className="playButton" id="playButtonLearn">
                <i className="fa-solid fa-circle-play"></i>
                <audio
                  src="data:audio/mp3;base64,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">
                </audio>
              </div>
              <div className="yesNo">
                <div className="buttonYesNo buttonYes" id="buttonYes">
                  <i className="fa-regular fa-circle-check fa-2xl"></i>
                </div>
                <div className="buttonYesNo buttonNo" id="buttonNo">
                  <i className="fa-regular fa-circle-xmark fa-2xl"></i>
                </div>
              </div>
            </div>
            <div className="credits">
              <a id="credits" href="https://unsplash.com" target="_blank">{learnStack[0]?.credits} - Unsplash</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LearnModule