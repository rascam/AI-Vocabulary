function CardList(words: any) {

  return (
    <div className="vocContainer">
      {words.map((word: any) => (
        <div key={word.id} className={`card card${word.bin}`}>
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
          <div className="credits">
            <a href="https://unsplash.com" target="_blank">
            {word.credits} - Unsplash</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardList