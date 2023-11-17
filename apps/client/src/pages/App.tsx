import { useState, useEffect } from 'react'
import api from '../lib/api'
import '../App.css'
import CardList from '../components/CardList'

function App() {

  const [loggedInUserId, setLoggedInUserId] = useState("clp2g7y6z0000hvsfurp26kt0")
  const [user, setUser] = useState(null)

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
      <h1 className='text-8xl'>AI Vocablary</h1>
      {user && CardList(user.words)}
    </>
  )
}

export default App
