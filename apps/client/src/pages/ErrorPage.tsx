import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function ErrorPage () {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }, [navigate])

  return (
    <div className="initDialog flex-col items-center gap-7" id="initDialog">
      <h2 className="welcome mt-10" id="welcomeInitBox">Sorry...</h2>
      <div className="introtext">This page doesn't exist</div>
    </div>
  )
}

export default ErrorPage