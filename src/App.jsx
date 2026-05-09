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
      <div>
        <div>
          <img src = "/STARTRS.png"/>
          <a href = "startrs.vercel.app"> Startrs </a>
        </div>
        <div>
          <img src = "fpl.png"/>
          <a href = "fpl-bot-frontend.vercel.app"> Fpl Bot </a>
        </div>
        <div>
          <img src = "github.png"/>
          <a href = "https://github.com/ShanAbdulkarim"> My Github </a>
        </div>
      </div>
    </>
  )
}

export default App
