import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='row'>
        <div className='pillars'>
          <h1> Shan Abdulkarim Projects </h1>
          <h3> This is a compilation of my public works</h3>
        </div>
        <div className='pillars' id = "phone">
            <div className='row'>
              <div className='pillars'>
                <a href = "https://startrs.vercel.app"><img className='iphone'  src = "/STARTRS.png"/></a>
                <a className = "link" href = "https://startrs.vercel.app"> Startrs </a>
              </div>
              <div className='pillars'>
                <a href = "https://fpl-bot-frontend.vercel.app"><img className='iphone' src = "fpl.png"/></a>
                <a className = "link" href = "https://fpl-bot-frontend.vercel.app"> Fpl Bot </a>
              </div>
              <div className='pillars'>
                <a href = "https://github.com/ShanAbdulkarim"><img className='iphone' src = "github.png"/></a>
                <a className = "link" href = "https://github.com/ShanAbdulkarim"> My Github </a>
              </div>
              <div className='pillars'>
                <a href = "https://apipal.vercel.app"><img className='iphone' src = "apipal.png"/></a>
                <a className = "link" href = "https://apipal.vercel.app"> Api-Pal </a>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default App
