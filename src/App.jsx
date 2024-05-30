import { useState } from 'react'
import Slider from './components/Slider'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-slider">
        <Slider/>
      </div>
    </>
  )
}

export default App
