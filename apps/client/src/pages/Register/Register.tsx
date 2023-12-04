import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/form/ErrorMessage'


import api from '../../lib/api'

function Register() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [srcLang, setSrcLang] = useState("")
  const [targetLang, setTargetLang] = useState("")
  const [level, setLevel] = useState("beginner")

  const [errorMessage, setErrorMessage] = useState("")

  async function submitHandler (e: React.FormEvent) {
    e.preventDefault()
    const userId = await api.createUser({name, email, password, userSrcLang: srcLang, userTargetLang: targetLang, userLevel: level})
    if (userId) {
      navigate(`/${userId}`)
    } else {
      setErrorMessage("User creation failed. Email might exist. Please try again.")
      setEmail("")
      setPassword("")
    }
  }

  return (
    <div className="">
    <div className="initDialog flex-col items-center " id="initDialog">
      <h2 className="welcome" id="welcomeInitBox">Welcome!</h2>
      <form className="flex-col" id="initUserData"  onSubmit={submitHandler} action="#">
      <h2 className="text-lg text-left mt-7">Which is your native language?</h2>
        <select className="max-w-md" id="input-initSrcLang" name="srcLang" value={srcLang} onChange={(e) => setSrcLang(e.target.value)}>
          <option disabled selected value="">Your language</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt-br">Português (Brasil)</option>
          <option value="pt-pt">Português (Portugal)</option>
          <option value="nl">Nederlands</option>
          <option value="ru">Русский / Russian</option>
          <option value="zh">中文 / Chinese (simplified)</option>
          <option value="ja">日本語 / Japanese</option>
          <option value="ko">한국어 / Korean</option>
          <option value="ar">العربية / Arabic</option>
        </select>
        <h2 className="text-lg text-left mt-7">Which language do you like to learn?</h2>
        <select className="max-w-md" id="input-initTargetLang" name="targetLang" value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option disabled value="">Language to learn</option>
          <option disabled value="xy">- high confidence -</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt-br">Português (Brasil)</option>
          <option value="pt-pt">Português (Portugal)</option>
          <option value="nl">Nederlands</option>
          <option value="ru">Русский / Russian</option>
          <option value="zh">中文 / Chinese (simplified)</option>
          <option value="ja">日本語 / Japanese</option>
          <option value="ko">한국어 / Korean</option>
          <option value="ar">العربية / Arabic</option>
          <option disabled value="">- medium confidence -</option>
          <option value="ca">Català</option>
          <option value="cs">Čeština / Czech</option>
          <option value="da">Dansk</option>
          <option value="he">Hebrew</option>
          <option value="hr">Hrvatski / Croatian</option>
          <option value="hu">Magyar / Hungarian</option>
          <option value="id">Indonesian</option>
          <option value="lt">Lietuvių / Lithuanian</option>
          <option value="nb">Norwegian (Bokmål)</option>
          <option value="pl">Polski / Polish</option>
          <option value="ro">Română / Romanian</option>
          <option value="fi">Suomi / Finnish</option>
          <option value="el">ελληνικά / Greek</option>
          <option value="bg">Български / Bulgarian</option>
          <option value="et">Eesti / Estonian</option>
          <option value="sk">Slovenčina / Slovak</option>
          <option value="sl">Slovenščina / Slovenian</option>
          <option value="sv">Svenska</option>
          <option value="tr">Türkçe</option>
          <option value="uk">Українська/ Ukrainian</option>
          <option value="lv">Latviešu / Latvian</option>
        </select>
        {/* <label htmlFor="input-initLevel">Your language level?</label> */}
        <h2 className="text-lg text-left mt-7">And your learning level?</h2>
        <select className="max-w-md box-border" id="input-initLevel" name="level" value={level} onChange={(e) => setLevel(e.target.value)}>
          {/* <option disabled selected value={level}>Choose a level</option> */}
          <option value="beginner">Beginner</option>
          <option value="sophisticated">Advanced</option>
        </select>
        <h2 className="text-lg text-left mt-7">And now to you!</h2>
        <input type="text" className="inputfield initDialogInput mt-2 mb-2 max-w-md" id='input-initName' name="name"
          placeholder="your name (optional)" value={name} onChange={(e) => setName(e.target.value)}/>
       <input type="text" className="inputfield initDialogInput mb-2 max-w-md" id='input-initEmail' name="email"
          placeholder="your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" className="inputfield initDialogInput mb-10 max-w-md" id='input-initPassword' name="email"
          placeholder="superstrong password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        {errorMessage && <ErrorMessage text={errorMessage} />}
        <button type="submit" className='button max-w-md' id="button-initUserData">Create account</button>
      </form>
    </div>
  </div>
  )
}

export default Register