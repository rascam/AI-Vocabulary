import api from "../lib/api"
import {User} from "../lib/types" 


function Settings ({userId, learningDirection, slowSpeech, setUser}: { userId: string, learningDirection: string | undefined, slowSpeech: boolean | undefined, setUser: React.Dispatch<React.SetStateAction<User | null>>}) {
  
  async function toggleLearningDirection() {
    let newDirection: string
    if (learningDirection === "targetToSrc") {
      newDirection = "srcToTarget"
    } else {
      newDirection = "targetToSrc"
    }
    const updatedUser = await api.patchUserProperty(userId, "learningDirection", newDirection)
    if (updatedUser) {
      setUser(updatedUser)
      console.log({updatedUser})
    }
  }

  async function toggleSpeechSpeed () {
    const updatedUser = await api.patchUserProperty(userId, "slowSpeech", !slowSpeech)
    if (updatedUser) {
      setUser(updatedUser)
      console.log({updatedUser})
    }
  }
  
  return (
    <div className="settingsContainer" id="settingsContainer">
        <div className="learningDirection">
          <span>English</span>
          <div onClick={toggleLearningDirection} className="buttonSettings" id="toggleLearningDirection">
            <i id="learningDirectionIcon" className={learningDirection === "targetToSrc" ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down"}></i>
            <span>Portuguese</span>
          </div>
        </div>
        <span>Speech Speed:</span>
        <div id="toggleSpeechSpeed" className="flipswitch">
          <input type="checkbox" name="flipswitch" className="flipswitch-cb" id="fs" checked={!slowSpeech} />
          <label onClick={toggleSpeechSpeed} className="flipswitch-label" htmlFor="fs">
            <div className="flipswitch-inner"></div>
            <div className="flipswitch-switch"></div>
          </label>
        </div>
      </div>
  )
}

export default Settings
