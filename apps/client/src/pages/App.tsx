import { useState, useEffect } from 'react'
import api from '../lib/api'
import '../App.css'
import { User } from '../lib/types'

import CardList from '../components/CardList'
import TopicInput from '../components/TopicInput'
import Statistics from '../components/Statistics'
import StatusRow from '../components/StatusRow'
import Settings from '../components/Settings'

import { testUser } from '../lib/const'

function App() {

  const [loggedInUserId, setLoggedInUserId] = useState(testUser)
  const [user, setUser] = useState<User | null>(null)
  const [words, setWords] = useState([])

  // const [showStats, setShowStats] = useState(true)
  // const [showVocList, setShowVocList] = useState(true)
  // const [showSettings, setShowSettings] = useState(true)
  const [showElement, setShowElement] = useState({vocList: true, stats: true, settings: true, topicInput: true})

  console.log({loggedInUserId})

  useEffect(() => {
    async function getUserData() {
      const userData = await api.getUserData(loggedInUserId)
      if (userData) {
        setUser(userData)
        setWords(userData.words)
        console.log({userData})
      }
    }
    getUserData()
  }, [loggedInUserId])


  return (
    <div className="appContainer">
      <h1 className="title-text text-6xl">AI Vocabulary Trainer</h1>
      <StatusRow name={user?.name} showElement={showElement} setShowElement={setShowElement}/>
      <div className="flexContainer">
        {showElement.topicInput &&
          <TopicInput userId={loggedInUserId} />}
        {showElement.settings &&
          <Settings learningDirection={user?.learningDirection} slowSpeech={user?.slowSpeech}/>}
        {showElement.stats && 
          <Statistics vocCount={user?.userVocCount || 0} score={user?.score || 0} />}
      </div>
      {showElement.vocList && user &&
        <CardList words={(words)} />}
    </div>
  )
}

export default App
