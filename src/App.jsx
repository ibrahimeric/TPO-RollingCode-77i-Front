import { useState } from 'react'
import Footer from './components/Footer.jsx'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App
