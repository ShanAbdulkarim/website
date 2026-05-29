import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [projects, setProjects] = useState(false)
  const [software, setSoftware] = useState(true)

  function toSoftwareEngineering() {
    setProjects(false)
    setSoftware(true)
  }

  function toProjects() {
    setProjects(true)
    setSoftware(false)
  }

  return (

    <>
      <div className='pillars'>
        <div className='sky'>
          <h1>What is heavy? So asks the spirit that would bear much, and</h1>
          <div className='camel'>
            <h1>Then kneels down <br />like the camel</h1>
            <img id='camelio' src='/camell.gif' />
            <h1>And wants to be <br /> well laden</h1>
          </div>
        </div>
        <h1> Shan Abdulkarim </h1>
        <div className='row' id="navbar">
          <a onClick={toSoftwareEngineering}> Software Engineering</a>
          <a href="https://www.goodreads.com/user/show/201437615-shan-abdulkarim"> Reading</a>
          <a onClick={toProjects}> Projects </a>
        </div>

        <div className='Pillars' id={software ? "shown" : "hidden"}>
          <h1> My Skills </h1>
          <div className='grid'>
            <ul>
              <h3> Languages</h3>
              <li> Python </li>
              <li> Javascript </li>
              <li> Java </li>
              <li> C++ </li>
              <li> HTML/CSS </li>
              <li> PHP </li>
            </ul>
            <ul>
              <h3> Databases</h3>
              <li> Firebase</li>
              <li> MongoDB</li>
              <li> SQL</li>
              <li> SQLite</li>
              <li> JSON</li>
            </ul>
          </div>
        </div>
        <div className='Pillars' id={projects ? "shown" : "hidden"}>
          <h1> Projects </h1>
          <div className='row'>
            <div className='pillars'>
              <img src="STARTRS.png" className = "imager"/>
              <a href='https://startrs.vercel.app'> STARTRS </a>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
