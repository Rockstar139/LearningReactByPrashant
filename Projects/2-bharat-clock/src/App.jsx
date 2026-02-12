import { useState } from 'react'
import ClockName from './components/ClockName'
import ClockDesc from './components/ClockDesc'
import CurrentTime from './components/CurrentTime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="clock-container">
      <ClockName/>
      <ClockDesc/>
      <CurrentTime/>
    </div>
  )
}

export default App
