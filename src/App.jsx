import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <div className='pillars'>
      <div className='sky'> 
        <h1>What is heavy? So asks the spirit that would bear much, and</h1>
        <div className='camel'>
          <h1>Then kneels down <br/>like the camel</h1>
          <img id = 'camelio' src = '/camell.gif'/>
          <h1>And wants to be <br/> well laden</h1>
        </div>
      </div>
      <div className='row' id = "navbar">
        <a className='boxless'> Shan Abdulkarim </a>
        <a> Software Engineering</a>
        <a href = "https://www.goodreads.com/user/show/201437615-shan-abdulkarim"> Reading</a>
        <a> Major Projects </a>
      </div>
      <div className='row'>
      </div>
      
  </div>
    </>
  )
}

export default App
