import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Shan Abdulkarim Projects </h1>
      <h2> This is a compilation of my public works</h2>
      <div className='row'>
        <div className='pillars'>
          <img className='imager'src = "/STARTRS.png"/>
          <a className = "link" href = "https://startrs.vercel.app"> Startrs </a>
        </div>
        <div className='pillars'>
          <img className='imager' src = "fpl.png"/>
          <a className = "link" href = "https://fpl-bot-frontend.vercel.app"> Fpl Bot </a>
        </div>
        <div className='pillars'>
          <img className='imager' src = "github.png"/>
          <a className = "link" href = "https://github.com/ShanAbdulkarim"> My Github </a>
        </div>
      </div>
    </>
  )
}

export default App
