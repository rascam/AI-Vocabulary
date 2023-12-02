import { useEffect, useState } from "react"

function Statistics( {vocCount, score, bins}: {vocCount: number, score: number, bins: number[]}) {

  const [ binDegrees, setBinDegrees] = useState<number[]>([5, 10, 15, 20])


  useEffect(() => {
    const calculateDegrees = [0,0,0,0]
    for ( let i = 0; i < 4; i++) {
      if (i > 0) {
        calculateDegrees[i] = calculateDegrees[i-1]
      } else {
        calculateDegrees[i] = -2
      }
      calculateDegrees[i] += ((280/vocCount)*bins[i])+4
    }
    setBinDegrees(calculateDegrees)
  }, [bins, vocCount])
  


  function generateScoreStars(score: number) {
    const emptyStar = <i className="fa-regular fa-star"></i>
    const fullStar = <i className="fa-solid fa-star"></i>
    return (
      <p id="stars">
        {score >= 100 ? fullStar : emptyStar}
        {score >= 250 ? fullStar : emptyStar}
        {score >= 500 ? fullStar : emptyStar}
        {score >= 1000 ? fullStar : emptyStar}
        {score >= 2000 ? fullStar : emptyStar}
      </p>
    )
  }

  return (
    <div className="statistics">
      <h2 className="text-lg text-left mb-3">Make your rainbow greeen!</h2>
        <div className="donutChart" style={{background: `conic-gradient(
          #ce3737 0deg ${binDegrees[0]}deg,
          #023047 ${binDegrees[0] + 1}deg ${binDegrees[0] + 2}deg,
          #cd8039 ${binDegrees[0] + 3}deg ${binDegrees[1]}deg,
          #023047 ${binDegrees[1] + 1}deg ${binDegrees[1] + 2}deg,
          #cbce00 ${binDegrees[1] + 3}deg ${binDegrees[2]}deg,
          #023047 ${binDegrees[2] + 1}deg ${binDegrees[2] + 2}deg,
          #8acb44 ${binDegrees[2] + 3}deg ${binDegrees[3]}deg,
          #023047 ${binDegrees[3] + 1}deg ${binDegrees[3] + 2}deg,
          #32ce32 ${binDegrees[3] + 3}deg 300deg,
          #023047 300deg 360deg)`}}>
          <div className="hole">
            <div className="vocCount">
              <div className="learnedCount">
                <p id="learnedCount">{bins[4]} learned</p>
              </div>
              <div className="totalCount">
                <p id="totalCount">{vocCount}</p>
              </div>
              <div className="newCount">
                <p id="newCount">{bins[0]} new</p>
              </div>
            </div>
          </div>
        </div>
        <div className="displayScore">
          <p id="score">{score}</p>
          {generateScoreStars(score)}
        </div>
    </div>
  )
}
export default Statistics