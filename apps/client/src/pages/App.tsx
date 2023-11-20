import { useState, useEffect } from 'react'
import api from '../lib/api'
import '../App.css'
import CardList from '../components/CardList'
import TopicInput from '../components/TopicInput'
import { User } from '../lib/types'


function App() {

  const [loggedInUserId, setLoggedInUserId] = useState("clp2g7y6z0000hvsfurp26kt0")
  const [user, setUser] = useState<User | null>(null)

  console.log({loggedInUserId})

  useEffect(() => {
    async function getUserData() {
      const userData = await api.getUserData(loggedInUserId)
      if (userData) {
        setUser(userData)
      }
    }
    getUserData()
  }, [loggedInUserId])


  return (
    <>
    <div className="appContainer">
      <h1 className="title-text text-6xl">AI Vocabulary Trainer</h1>
      <TopicInput />
      {user && CardList(user.words)}
    </div>
    </>
  )
}

export default App
