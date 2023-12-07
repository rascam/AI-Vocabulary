import { useState } from "react"
import React from "react"
import { Word } from "../lib/types"
import api from "../lib/api"


function TopicInput ({userId, updateWords}: {userId: string, updateWords: React.Dispatch<React.SetStateAction<Word[]>>}) {

  const [topic, setTopic] = useState("")
  const [term, setTerm] = useState("")

  const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let text = event.target.value
    if (!text.match(/^[-\p{L}\p{N}\s_-]+$/giu)) {
      text = text.slice(0, text.length -1)
    }
    text = text.slice(0, 50)
    
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

    if (!text.match(/^[-\p{L}\p{N}\s_-]+$/giu)) {
      text = text.slice(0, text.length -1)
    }
    text = text.slice(0, 50)
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
        <form className="flex flex-nowrap" id="addTopicForm" onSubmit={(e) => submitTopicHandler(e, userId, topic)}>
          <input type="text" className="inputfield mr-1" id='input-addTopic' name="topic" onChange={handleTopicChange} placeholder="Enter a topic" value={topic} />
          <button style={{background: '#ffb703'}} type="submit" className='button button-small h-11 mt-1' id="button-addTopic">+15</button>
        </form>
      </div>
      <div className="input">
        <form  className="flex flex-nowrap" id="addSingleForm" onSubmit={(e) => submitSingleHandler(e, userId, term)}>
          <input type="text" className="inputfield mr-1" id='input-addSingle' name="single" onChange={handleSingleTermChange} placeholder="word or short phrase" value={term} />
          <button style={{background: '#ffb703'}} type="submit" className='button button-small  h-11 mt-1' id="button-addSingle">+1</button>
        </form>
      </div>
    </div>
  )
}

export default TopicInput