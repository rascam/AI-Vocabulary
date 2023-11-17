import { useState, useEffect } from 'react'
import api from '../lib/api'
import '../App.css'

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
      {user && user.words.map((word: any) => (
        <div className="card" key={word.id}>
          <h5>{word.srcWord}</h5>
          <h5>{word.targetWord}</h5>
        </div>
      ))}
    </>
  )
}

export default App
