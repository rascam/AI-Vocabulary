import { useEffect } from 'react'
import { defaultImg } from '../data/const'
import { Word } from '../lib/types'


function LearnModule({words}: {words: Word[]}) {

  const [learnStack, setLearnStack] = useState<Word[]>([])

  useEffect(() => {

    
    
    
  }, [learnStack])

  return (
    <div  className={`card card${word.bin}`}
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
  )
}

export default LearnModule