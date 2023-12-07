import { Dispatch, SetStateAction } from "react"
import { DisplaySwitch } from "../../lib/types"
import { useNavigate } from "react-router-dom"


function StatusRow({name, showElement, setShowElement}:{name:string | undefined, showElement:DisplaySwitch, setShowElement:Dispatch<SetStateAction<DisplaySwitch>>}) {
  
  const navigate = useNavigate()
  
  return (
    <div className="statusRow" id="statusRow">
      <div className="iconRow p-1">
          <i id="addVocabularyIcon" className="fa-regular fa-square-plus" onClick={() => setShowElement({ ...showElement, topicInput: !showElement.topicInput})}></i>
          {/* <i className="fa-light fa-cards-blank"></i> */}
          <i className="fa-regular fa-file-lines" onClick={() => setShowElement({ ...showElement, vocList: !showElement.vocList})}></i>
          <i className="fa-solid fa-chart-pie" onClick={() => setShowElement({ ...showElement, stats: !showElement.stats})}></i>
          <i className="fa-solid fa-gear" onClick={() => setShowElement({ ...showElement, settings: !showElement.settings})}></i>
      <h3 className="ml-0 -mr-2 -mt-1.5" id="welcome">{name || "  "}</h3>
        <i id="logout" className="fa-solid fa-arrow-right-from-bracket mr-3" onClick={() => navigate('/')}></i>
      </div>
    </div>
  )
}

export default StatusRow
