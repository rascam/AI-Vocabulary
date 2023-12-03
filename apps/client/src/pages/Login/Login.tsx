import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/form/ErrorMessage'


import api from '../../lib/api'

function Login() {

  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function submitHandler (e: React.FormEvent) {
    e.preventDefault()
    const userId = await api.loginUser(email, password)
    if (userId) {
      navigate(`/${userId}`)
    } else {
      setErrorMessage("Wrong name or password")
      setEmail("")
      setPassword("")
    }
  }

  async function toRegister (e: React.FormEvent) {
    e.preventDefault()
    navigate("/register")
  }

  return (
    <div className="initDialog flex-col" id="initDialog">
      <h2 className="welcome" id="welcomeInitBox">Welcome!</h2>
      <h2 className="text-lg text-left mt-7">Did we see us before?</h2>
      <form id="initName" onSubmit={submitHandler} action="#">
        <input type="text" className="inputfield initDialogInput mr-1" id='input-initName' name="email"
          placeholder="your email" value={email} onChange={(e) =>  setEmail(e.target.value)}/>
           <input type="text" className="inputfield initDialogInput mr-2" id='input-initPassword' name="password"
          placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className='button' id="button-initName">login</button>
      </form>
      {errorMessage && !email && !password && <ErrorMessage text={errorMessage} />}
      <h2 className="text-lg text-left mt-12">Don't have an account? - <a onClick={toRegister} className="cursor-pointer hover:text-white" >Register</a></h2>
    </div>
  )
}

export default Login