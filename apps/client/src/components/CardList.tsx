function CardList(words: any) {

  return (
    <div className="">
      {words.map((word: any) => (
        <div key={word.id} className={`card card${word.bin}`} style={{background: "linear-gradient(#19778d99, #19778d99), url(https://images.unsplash.com/photo-1617975609658-2de247badd36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHw0fHxsYW5ndWFnZSUyMGRpY3Rpb25hcnl8ZW58MXwwfHx8MTY4Nzg5MzkzMHww&ixlib=rb-4.0.3&q=80&w=400); background-size: cover;"}}>
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