import { useState } from "react"
import React from "react"

function TopicInput () {

  function submitHandler (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(topic)
  }

const [topic, setTopic] = useState("")

  return (
    <div className="inputContainer" id="inputContainer">
      <div className="input">
        <form id="addTopicForm" action="#">
          <input type="text" className="inputfield" id='input-addTopic' name="topic" onChange={(e) => setTopic(e.target.value)} placeholder="Enter a topic" value={topic} />
          <button type="submit" className='button button-small' id="button-addTopic">+10</button>
        </form>
      </div>
    </div>
  )
}

export default TopicInput