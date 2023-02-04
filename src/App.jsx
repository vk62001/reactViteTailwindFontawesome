import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { MainRoutes } from './routes/mainroutes'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <MainRoutes />
  )
}

export default App
