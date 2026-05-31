import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [projects, setProjects] = useState(false)
  const [software, setSoftware] = useState(true)
  const [videoEditing, setVideoEditing] = useState(false)

  function toSoftwareEngineering() {
    setProjects(false)
    setVideoEditing(false)
    setSoftware(true)
  }

  function toProjects() {
    setProjects(true)
    setVideoEditing(false)
    setSoftware(false)
  }

  function toVideoEditing() {
    setProjects(false)
    setVideoEditing(true)
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
          <button onClick={toSoftwareEngineering}> Software Engineering</button>
          <button href="https://www.goodreads.com/user/show/201437615-shan-abdulkarim"> Reading</button>
          <button onClick={toProjects}> Projects </button>
          <button onClick={toVideoEditing}> Video Editing</button>
        </div>

        <div className='Pillars' id={software ? "shown" : "hidden"}>
          <h1> My Skills </h1>
          <div className='grid'>
            <div className='pillars'>
              <h3>Languages:</h3>
              <ul>
                <li> Python </li>
                <li> Javascript </li>
                <li> Java </li>
                <li> C++ </li>
                <li> HTML/CSS </li>
                <li> PHP </li>
              </ul>
            </div>
            <div className='pillars'>
              <h3>Databases:</h3>
              <ul>
                <li> Firebase</li>
                <li> MongoDB</li>
                <li> SQL</li>
                <li> SQLite</li>
                <li> JSON</li>
              </ul>
            </div>
            <div className='pillars'>
              <h3>Frameworks:</h3>
              <h4> Backend</h4>
              <ul>
                <li> Django</li>
                <li> Node</li>
              </ul>
              <h4> Frontend</h4>
              <ul>
                <li> React</li>
              </ul>
            </div>
            <div className='pillars'>
              <h3>Infrastructure:</h3>
              <h4> Authentication:</h4>
              <ul> <li> Firestore</li></ul>
              <h4> </h4>
            </div>
          </div>
        </div>
        <div className='Pillars' id={projects ? "shown" : "hidden"}>
          <h1> Projects </h1>
          <div className='row'>
            <div className='pillars'>
              <img src="STARTRS.png" className = "imager"/>
              <a href='https://startrs.vercel.app'> STARTRS </a>
            </div>
            <div className='pillars'>
              <img src="claude-pl.png" className = "imager"/>
              <a href='https://fpl-friend-claude.vercel.app'> FPL Friend Claude </a>
            </div>
          </div>
        </div>
        <div className='Pillars' id={videoEditing ? "shown" : "hidden"}>
          <h1> Video Editing Projects </h1>
          <div className='row'>
            <div className='pillars'>
              <div className='pillars'>
                <h3> I worked for this creator and created these <br/> reels in After Effects </h3>
                <img src = "gabstorm.png" href = "https://www.instagram.com/gabstorm.chess/" className='images'/>
                <br />
                <a href = "https://www.instagram.com/p/DXaPmg0CcZm/"> Watch now! </a>
              </div>
              <h3> I worked for the Traveling Chess Club and created these <br/> reels in After Effects </h3>
              <div className='row'>
                <div className='pillars'>
                  <img src = "traveler.jpg" className='imager'/>
                  <a href = "https://www.instagram.com/p/DXaPmg0CcZm/"> Watch now! </a>
                </div>
                <div className='pillars'>
                  <img src = "traveler.jpg" className='imager'/>
                  <a href = "https://www.instagram.com/p/DXaPmg0CcZm/"> Watch now! </a>
                </div>
                <div className='pillars'>
                  <img src = "traveler.jpg" className='imager'/>
                  <a href = "https://www.instagram.com/p/DVP84yoDYqP/"> Watch now! </a>
                </div>
                <div className='pillars'>
                  <img src = "traveler.jpg" className='imager'/>
                  <a href = "https://www.instagram.com/p/DVZyxaICcYB/"> Watch now! </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
