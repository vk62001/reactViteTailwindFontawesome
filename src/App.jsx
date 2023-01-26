import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <FontAwesomeIcon icon={faEnvelope} />
    </h1>
  )
}

export default App
