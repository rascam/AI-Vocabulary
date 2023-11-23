import { useState } from "react"
import React from "react"
import { Word } from "../lib/types"
import api from "../lib/api"


function TopicInput ({userId, updateWords}: {userId: string, updateWords: React.Dispatch<React.SetStateAction<Word[]>>}) {

  const [topic, setTopic] = useState("")

  async function submitHandler (e: React.FormEvent<HTMLButtonElement>, user: string, term: string) {
    e.preventDefault()
    setTopic("")
    await api.createWordsByTopic(user, term)
    const wordArray = await api.getWordsByUserId(user)
    if (wordArray) {
      updateWords(wordArray)
    }
  }

  return (
    <div className="inputContainer" id="inputContainer">
      <div className="input">
        <form id="addTopicForm" onSubmit={(e) => submitHandler(e, userId, topic)}>
          <input type="text" className="inputfield" id='input-addTopic' name="topic" onChange={(e) => setTopic(e.target.value)} placeholder="Enter a topic" value={topic} />
          <button style={{background: '#ffb703'}} type="submit" className='button button-small' id="button-addTopic">+10</button>
        </form>
      </div>
    </div>
  )
}

export default TopicInput