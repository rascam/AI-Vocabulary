import { useState, useEffect } from 'react'
import api from '../lib/api'
import '../App.css'
import { User, Word } from '../lib/types'

import CardList from '../components/CardList'
import TopicInput from '../components/TopicInput'
import Statistics from '../components/Statistics'
import StatusRow from '../components/StatusRow'
import Settings from '../components/Settings'

import { testUser } from '../lib/const'

function App() {

  const [loggedInUserId, setLoggedInUserId] = useState(testUser)
  const [user, setUser] = useState<User | null>(null)
  const [words, setWords] = useState<Word[]>([])

  const [showElement, setShowElement] = useState({vocList: true, stats: true, settings: true, topicInput: true})

  console.log({loggedInUserId})

  useEffect(() => {
    async function getData() {
      const userData = await api.getUserData(loggedInUserId)
      if (userData) {
        setUser(userData)
        console.log({userData})
      }
      const wordArray = await api.getWordsByUserId(loggedInUserId)
      if (wordArray) {
        setWords(wordArray)
        console.log({wordArray})
      }
    }
    getData()
  }, [loggedInUserId])


  return (
    <div className="appContainer">
      <h1 className="title-text text-6xl">AI Vocabulary Trainer</h1>
      <StatusRow name={user?.name} showElement={showElement} setShowElement={setShowElement}/>
      <div className="flexContainer">
        {showElement.topicInput &&
          <TopicInput userId={loggedInUserId} updateWords={(array) => setWords(array)}/>}
        {showElement.settings &&
          <Settings userId={loggedInUserId} learningDirection={user?.learningDirection} slowSpeech={user?.slowSpeech} setUser={(user) => setUser(user)}/>}
        {showElement.stats && 
          <Statistics vocCount={words.length || 0} score={user?.score || 0} />}
      </div>
      {showElement.vocList && user &&
        <CardList words={(words)} />}
    </div>
  )
}

export default App
