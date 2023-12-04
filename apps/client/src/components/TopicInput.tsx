import { useState } from "react"
import React from "react"
import { Word } from "../lib/types"
import api from "../lib/api"


function TopicInput ({userId, updateWords}: {userId: string, updateWords: React.Dispatch<React.SetStateAction<Word[]>>}) {

  const [topic, setTopic] = useState("")
  const [term, setTerm] = useState("")

  async function submitTopicHandler (e: React.FormEvent, user: string, topic: string) {
    e.preventDefault()
    setTopic("")
    await api.createWordsByTopic(user, topic)
    const wordArray = await api.getWordsByUserId(user)
    if (wordArray) {
      updateWords(wordArray)
    }
  }

  async function submitSingleHandler (e: React.FormEvent, user: string, term: string) {
    e.preventDefault()
    setTopic("")
    await api.createSingleWordByTerm(user, term)
    const wordArray = await api.getWordsByUserId(user)
    if (wordArray) {
      updateWords(wordArray)
    }
  }



  return (
    <div className="inputContainer" id="inputContainer">
      <div className="input">
        <form id="addTopicForm" onSubmit={(e) => submitTopicHandler(e, userId, topic)}>
          <input type="text" className="inputfield" id='input-addTopic' name="topic" onChange={(e) => setTopic(e.target.value)} placeholder="Enter a topic" value={topic} />
          <button style={{background: '#ffb703'}} type="submit" className='button button-small' id="button-addTopic">add</button>
        </form>
      </div>
      <div className="input">
        <form id="addSingleForm" onSubmit={(e) => submitSingleHandler(e, userId, term)}>
          <input type="text" className="inputfield" id='input-addSingle' name="single" onChange={(e) => setTerm(e.target.value)} placeholder="word or short phrase" value={term} />
          <button style={{background: '#ffb703'}} type="submit" className='button button-small' id="button-addSingle">add</button>
        </form>
      </div>
    </div>
  )
}

export default TopicInput