import api from "../../lib/api"
import {User} from "../../lib/types"
import { languages } from "../../data/languagesConfig"

function Settings ({userId, vocCount, learningDirection, slowSpeech, userSrcLang = "en", userTargetLang = "en", autoPlay, setAutoPlay, setUser, setBins}: { userId: string, vocCount: number, learningDirection: string | undefined, slowSpeech: boolean | undefined, userSrcLang: string | undefined, userTargetLang: string | undefined, autoPlay: boolean, setAutoPlay: React.Dispatch<React.SetStateAction<boolean>>, setUser: React.Dispatch<React.SetStateAction<User | null>>, setBins: React.Dispatch<React.SetStateAction<number[]>>}) {
  
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
    }
  }

  async function toggleSpeechSpeed () {
    const updatedUser = await api.patchUserProperty(userId, "slowSpeech", !slowSpeech)
    if (updatedUser) {
      setUser(updatedUser)
    }
  }

  async function resetBins () {
    // TODO API call which sets the bins of all words of that user to 0 
    setBins([vocCount, 0, 0, 0, 0]) 
    }
  
  
  return (
    <div className="settingsContainer" id="settingsContainer">
        <h2 className="text-lg text-left mb-1">Learning Direction:</h2>
        <div className="learningDirection">
          <span>{languages[learningDirection === "srcToTarget" ? userSrcLang : userTargetLang].language || "English"}</span>
          <div onClick={toggleLearningDirection} className="buttonSettings" id="toggleLearningDirection">
            <i id="learningDirectionIcon" className="fa-solid fa-arrow-down"></i>
          </div>
            <span>{languages[learningDirection === "srcToTarget" ? userTargetLang : userSrcLang].language || "English"}</span>
        </div>
        <h2 className="text-lg text-left mt-5 mb-2">Speech Speed:</h2>
        <div id="toggleSpeechSpeed" className="flipswitch">
          <input type="checkbox" name="flipswitch" className="flipswitch-cb" id="fs" checked={!slowSpeech} />
          <label onClick={toggleSpeechSpeed} className="flipswitch-label" htmlFor="fs">
            <div className="flipswitch-inner"></div>
            <div className="flipswitch-switch"></div>
          </label>
        </div>
        <div className="flex mt-8">
        <h2 className="text-lg text-left mb-1 mr-4">Auto Play:</h2>
          <div onClick={() => setAutoPlay(!autoPlay)} className="buttonSettings">
            <i id="learningDirectionIcon" className={autoPlay ? 'fa-solid fa-check' : 'fa-solid fa-minus'}></i>
          </div>
        </div>
        <div className="flex mt-8">
        <h2 className="text-lg text-left mb-1 mr-4">Reset Stats:</h2>
          <div onClick={resetBins} className="buttonSettings">
            <i id="learningDirectionIcon" className="fa-solid fa-arrow-rotate-left"></i>
          </div>
        </div>
      </div>
  )
  }

export default Settings
