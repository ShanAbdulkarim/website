import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='pillars'>
      <div className='row'>
        <div className='pillars'>
          <h1> Shan Abdulkarim </h1>
          <h3> Hello there ye who found yourself so unlucky as to appear here. <br></br>
          I am Shan Abdulkarim and here are my works.</h3>
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
      <div className='panel'> 
        <div className='pillars'>
          <a href = "https://startrs.vercel.app"><img className='pictures' src = "/STARTRS.png" /></a>
          <a className='link' href = "https://startrs.vercel.app"> Startrs </a>
        </div>
        <div className='pillars'>
          <h1> Javascript </h1>
          <p> I have been writing Javascript code for over half a decade. While I am skilled <br></br>
              in other fields, javascript is certainly my strongest suit. I have numerous public <br></br>
              projects written in Javascript, both also showing fluency in react and Node js
              </p>
        </div>
      </div>
      <div className='panel'> 
        <div className='pillars'>
          <h1> Python </h1>
          <p> I have been writing python code for 4 years now. I have several github projects <br></br>
              that show my skill in Python and find it to be the easiest language to navigate. <br></br>
              I think the coolest thing about python is how easy it was for me to pick up. Coming <br></br>
              from a primarily C++ and Javascript background at the time I expected a very syntax-y <br></br>
              feel but python did not give me that at all and gained quite a strong understanding <br></br>
              of it in about a week. My best framework with python is Django
              </p>
        </div>
        <div className='pillars'>
          <a href = "https://github.com/ShanAbdulkarim/TeamSelector"><img className='pictures' src = "/STARTRS.png" /></a>
          <a className='link' href = "https://github.com/ShanAbdulkarim/TeamSelector"> Team Selector </a>
        </div>
      </div>
      <div className='panel'> 
        <div className='pillars'>
          <img className='examples' src = "/mongodb.png" />
          <img className='examples' src = "/sql.png" />
          <img className='examples' src = "/firebase.png" />
        </div>
        <div className='pillars'>
          <h1> Databases</h1>
          <p> If there is a free database software you can bet I've used it. MongoDB, SQL, <br></br>
          Firebase, JSON the list goes on and on. I am extremely fluent in JSON as that's<br></br> 
          how I send messages across frontend and backend software. MongoDB is another<br></br> 
          favorite of mine using both Mongoose and Mongoclient work for me, however<br></br> 
          I grew to prefer mongoclient. SQL I had used when I learned PHP 3 years ago<br></br> 
          and took quite a liking to it. However firebase and firestore are my preferred <br></br> 
          databases as of May 2026.
              </p>
        </div>
      </div>
      <div className='panel'> 
        <div className='pillars'>
          <h1> Frameworks </h1>
          <p> As mentioned prior I have a fluent understanding of Node, React, and Django.<br></br> 
          Node is the one which I am best, react as a close second and Django cool third place. <br></br>
          However this section will likely never stop because I plan to learn a lot more frameworks <br></br>
          in the near future. I am alzo very familiar with Docker as most of my github projects<br></br> 
          are dockerzied. 
              </p>
        </div>
        <div className='pillars'>
          <img className='examples' src = "/node.png" />
          <img className='examples' src = "/react.png" />
          <img className='examples' src = "/django.png" />
        </div>
      </div>
      <div className='panel'>
        <div className='pillars'>
          <p>I think my best attribute as a worker is my willingness to learn something new.<br/> 
          I pick up languages in a week, and give me an hour and I”ll understand the framework.<br/> 
          I also love to use engines for game development and have picked up their workflow quite quickly.

              <br/> <br/> My best attribute is my insatiable desire to amass knowledge. 
            </p>
        </div>

      </div>
  </div>
    </>
  )
}

export default App
