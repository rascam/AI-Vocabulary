function Settings () {
  return (
    <div className="settingsContainer" id="settingsContainer">
        <div className="learningDirection">
          <p>English</p>
          <div className="buttonSettings" id="toggleLearningDirection">
            <i id="learningDirectionIcon" className="fa-solid fa-arrow-right-long"></i>
            <p>Portuguese</p>
          </div>
        </div>
        <p>Speech Speed:</p>
        <div id="toggleSpeechSpeed" className="flipswitch">
          <input type="checkbox" name="flipswitch" className="flipswitch-cb" id="fs" checked />
          <label className="flipswitch-label" htmlFor="fs">
            <div className="flipswitch-inner"></div>
            <div className="flipswitch-switch"></div>
          </label>
        </div>
      </div>
  )
}

export default Settings
