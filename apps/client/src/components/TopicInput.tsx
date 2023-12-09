import { useState } from "react"
import React from "react"
import { Word } from "../lib/types"
import api from "../lib/api"
import GeneratingAnimation from "./ui/GeneratingAni"


function TopicInput ({userId, updateWords, isGenerating, setIsGenerating}: {userId: string, updateWords: React.Dispatch<React.SetStateAction<Word[]>>, isGenerating: boolean, setIsGenerating: React.Dispatch<React.SetStateAction<boolean>>}) {

  const [topic, setTopic] = useState("")
  const [term, setTerm] = useState("")

  const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let text = event.target.value
    if (!text.match(/^[-\p{L}\p{N}\s,?.!']+$/giu)) {
      text = text.slice(0, text.length -1)
    }
    text = text.slice(0, 50)
    setTopic(text)
  }
  
  async function submitTopicHandler (e: React.FormEvent, user: string, topic: string) {
    e.preventDefault()
    const text = topic.trim()
    setTopic("")
    setIsGenerating(true)
    await api.createWordsByTopic(user, text)
    const wordArray = await api.getWordsByUserId(user)
    if (wordArray) {
      updateWords(wordArray)
    }
    setIsGenerating(false)
  }

  const handleSingleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let text = event.target.value

    if (!text.match(/^[-\p{L}\p{N}\s,?.!'/]+$/giu)) {
      text = text.slice(0, text.length -1)
    }
    text = text.slice(0, 50)
    setTerm(text)
  }

  async function submitSingleHandler (e: React.FormEvent, user: string, term: string) {
    e.preventDefault()
    const text = term.trim()
    setTerm("")
    await api.createSingleWordByTerm(user, text)
    const wordArray = await api.getWordsByUserId(user)
    if (wordArray) {
      updateWords(wordArray)
    }
  }



  return (
    <div className="flex flex-col justify-items-center">
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
      {isGenerating && <div className="ml-12"><GeneratingAnimation /></div>}  
    </div>
  )
}

export default TopicInput