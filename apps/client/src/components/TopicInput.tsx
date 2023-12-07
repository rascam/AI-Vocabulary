import { useState } from "react"
import React from "react"
import { Word } from "../lib/types"
import api from "../lib/api"


function TopicInput ({userId, updateWords}: {userId: string, updateWords: React.Dispatch<React.SetStateAction<Word[]>>}) {

  const [topic, setTopic] = useState("")
  const [term, setTerm] = useState("")

  const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let text = event.target.value

    text = text.replace(/[^a-zA-Z\s'.,]/g, "").slice(0, 30)
    
    setTopic(text)
  }
    
  async function submitTopicHandler (e: React.FormEvent, user: string, topic: string) {
    e.preventDefault()
    topic = topic.trim()
    await api.createWordsByTopic(user, topic)
    setTopic("")
    const wordArray = await api.getWordsByUserId(user)
    if (wordArray) {
      updateWords(wordArray)
    }
  }

  const handleSingleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let text = event.target.value

    text = text.replace(/[^0-9a-zA-Z\s'.,?!"]/g, "").slice(0, 50)
    
    setTerm(text)
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
          <input type="text" className="inputfield mr-1" id='input-addTopic' name="topic" onChange={handleTopicChange} placeholder="Enter a topic" value={topic} />
          <button style={{background: '#ffb703'}} type="submit" className='button button-small' id="button-addTopic">+15</button>
        </form>
      </div>
      <div className="input">
        <form id="addSingleForm" onSubmit={(e) => submitSingleHandler(e, userId, term)}>
          <input type="text" className="inputfield mr-1" id='input-addSingle' name="single" onChange={handleSingleTermChange} placeholder="word or short phrase" value={term} />
          <button style={{background: '#ffb703'}} type="submit" className='button button-small' id="button-addSingle">+1</button>
        </form>
      </div>
    </div>
  )
}

export default TopicInput