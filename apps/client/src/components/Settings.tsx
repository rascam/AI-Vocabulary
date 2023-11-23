


function Settings ({learningDirection, slowSpeech}: {learningDirection: string | undefined, slowSpeech: boolean | undefined}) {
  
  function handleToggleLearningDirection() {
    if (learningDirection === "targetToSrc") {
      setLearningDirection("srcToTarget")
    } else {
      setLearningDirection("targetToSrc")
    }

    
  }
  
  return (
    <div className="settingsContainer" id="settingsContainer">
        <div className="learningDirection">
          <span>English</span>
          <div className="buttonSettings" id="toggleLearningDirection">
            <i id="learningDirectionIcon" onClick={handleToggleLearningDirection} className={learningDirection === "targetToSrc" ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down"}></i>
            <span>Portuguese</span>
          </div>
        </div>
        <span>Speech Speed:</span>
        <div id="toggleSpeechSpeed" className="flipswitch">
          <input type="checkbox" name="flipswitch" className="flipswitch-cb" id="fs" defaultChecked />
          <label className="flipswitch-label" htmlFor="fs">
            <div className="flipswitch-inner"></div>
            <div className="flipswitch-switch"></div>
          </label>
        </div>
      </div>
  )
}

export default Settings
