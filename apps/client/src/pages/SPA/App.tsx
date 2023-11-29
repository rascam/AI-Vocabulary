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


function App() {
  const navigate = useNavigate()
  const { userId } = useParams()
  console.log({userId})
  const [loggedInUserId, setLoggedInUserId] = useState<string | undefined>(undefined)
  const [user, setUser] = useState<User | null>(null)
  const [words, setWords] = useState<Word[]>([])

  const [showElement, setShowElement] = useState({vocList: true, stats: true, settings: true, topicInput: true})

  useEffect(() => {
    async function loginAndGetData() {
      if (!userId) {
        navigate('/')
        return
      }
      const userData = await api.getUserData(userId)
      if (userData) {
        console.log({userData})
        setUser(userData)
        setLoggedInUserId(userId)
      } else {
        console.log({userData})
        navigate('/')
        return
      }
      const wordArray = await api.getWordsByUserId(loggedInUserId)
      if (wordArray) {
        setWords(wordArray)
      }
      setLoggedInUserId(userId)
    }
    loginAndGetData()
  }, [userId, loggedInUserId, navigate])


  return (
    <div className="appContainer">
      <h1 className="title-text text-6xl">AI Vocabulary Trainer</h1>
      <StatusRow name={user?.name} showElement={showElement} setShowElement={setShowElement}/>
      <div className="flexContainer">
        {showElement.topicInput && loggedInUserId &&
          <TopicInput userId={loggedInUserId} updateWords={(array) => setWords(array)}/>}
        {showElement.settings && loggedInUserId &&
          <Settings userId={loggedInUserId} learningDirection={user?.learningDirection} slowSpeech={user?.slowSpeech} setUser={(user) => setUser(user)}/>}
        {user && <LearnModule words={(words)} slowSpeech={user.slowSpeech} />}
        {showElement.stats && loggedInUserId &&
          <Statistics vocCount={words.length || 0} score={user?.score || 0} />}
      </div>
      {showElement.vocList && user &&
        <CardList words={(words)} slowSpeech={user.slowSpeech} />}
    </div>
  )
}

export default App
