import { Dispatch, SetStateAction } from "react"
import { DisplaySwitch } from "../lib/types"

function StatusRow({name, showElement,setShowElement}:{name:string | undefined, showElement:DisplaySwitch, setShowElement:Dispatch<SetStateAction<DisplaySwitch>>}) {
  return (
    <div className="statusRow" id="statusRow">
      <h3 className="Welcome" id="welcome">Welcome
        {name && `, ${name}`}!</h3>
      <div className="iconRow">
        <label htmlFor="addVocabularySwitch">
          <i id="addVocabularyIcon" className="fa-regular fa-square-plus" onClick={() => setShowElement({ ...showElement, topicInput: !showElement.topicInput})}></i>
        </label>
        <label htmlFor="vocListSwitch">
          {/* <i className="fa-light fa-cards-blank"></i> */}
          <i className="fa-regular fa-file-lines" onClick={() => setShowElement({ ...showElement, vocList: !showElement.vocList})}></i>
        </label>
        <label htmlFor="settingsSwitch">
          <i className="fa-solid fa-gear" onClick={() => setShowElement({ ...showElement, settings: !showElement.settings})}></i>
        </label>
        <i id="logout" className="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
    </div>
  )
}

export default StatusRow