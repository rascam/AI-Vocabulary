function Statistics( {vocCount, score, bins}: {vocCount: number, score: number, bins: number[]}) {

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
        <div className="donutChart">
          <div className="hole">
            <div className="vocCount">
              <div className="learnedCount">
                <p id="learnedCount">{bins[4]} learned</p>
              </div>
              <div className="totalCount">
                <p id="totalCount">{vocCount}{bins}</p>
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