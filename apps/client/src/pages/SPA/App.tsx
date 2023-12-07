import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import api from '../../lib/api'
import { User, Word } from '../../lib/types'

import CardList from './CardList'
import TopicInput from '../../components/TopicInput'
import Statistics from './Statistics'
import StatusRow from './StatusRow'
import Settings from './Settings'
import LearnModule from './LearnModule'
import calculateBins from '../../utils/calculateBins'


function App() {
  const navigate = useNavigate()
  const { userId } = useParams()

  const [loggedInUserId, setLoggedInUserId] = useState<string | undefined>(undefined)
  const [user, setUser] = useState<User | null>(null)
  const [words, setWords] = useState<Word[]>([])
  const [bins, setBins] = useState([0, 0, 0, 0, 0])

  const [showElement, setShowElement] = useState({vocList: false, stats: true, settings: false, topicInput: true})
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    async function loginAndGetData() {
      if (!userId) {
        navigate('/')
        return
      }
      const userData = await api.getUserData(userId)
      if (userData) {
   
        setUser(userData)
        setLoggedInUserId(userId)
      } else {

        navigate('/')
        return
      }
      const wordArray = await api.getWordsByUserId(loggedInUserId)
      if (wordArray) {
        setWords(wordArray)
      }
      setLoggedInUserId(userId)

      if (wordArray) {
        setBins(calculateBins(wordArray))
      }
      
    }
    loginAndGetData()
  }, [userId, loggedInUserId, navigate])

  useEffect(() => {
    setBins(calculateBins(words))
  }, [words])


  return (
  
    <div className="appContainer">
      <StatusRow name={user?.name} showElement={showElement} setShowElement={setShowElement}/>
      {/* <h1 className="title-text text-6xl">AI Vocabulary Trainer</h1> */}
      
      <div className="flexContainer">
        {showElement.topicInput && loggedInUserId &&
          <TopicInput userId={loggedInUserId} updateWords={(array) => setWords(array)}/>}
        {showElement.settings && loggedInUserId &&
          <Settings userId={loggedInUserId} vocCount={words.length || 0} learningDirection={user?.learningDirection} slowSpeech={user?.slowSpeech} userSrcLang={user?.userSrcLang} userTargetLang={user?.userTargetLang} autoPlay={autoPlay} setAutoPlay={(autoPlay) => setAutoPlay(autoPlay)} setUser={(user) => setUser(user)} setBins={(bins) => setBins(bins)}/>}
        {loggedInUserId && user && <LearnModule userId={loggedInUserId} words={(words)} slowSpeech={user.slowSpeech} userScore={user.score} autoPlay={autoPlay} setUser={(user) => setUser(user)} bins={bins} setBins={(bins) => setBins(bins)} />}
        {showElement.stats && loggedInUserId &&
          <Statistics vocCount={words.length || 0} score={user?.score || 0} bins={bins}/>}
      </div>
      {showElement.vocList && user &&
        <CardList words={(words)} slowSpeech={user.slowSpeech} />}
    </div>

  )
}

export default App
