import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import wikiLogo from './../public/imgs/wikiLogo.png'
import menuLines from './../public/imgs/menuLines.png'
import portrait from './../public/imgs/franx.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="content">
      <div id="header">
        <div id="headerMenu">
          <img src={menuLines} alt ="menuLines" id="menuLines"></img>
        </div>
        <div id="headerLogo">
          <img src={wikiLogo} alt ="wikipedia Logo" id="wikiLogo"></img>
        </div>
        <div id="search">
          <input type="search" id="searchBar" placeholder="Search Wikipedia"></input>
          <input type="submit" id="submitButton" value="Search"></input>
        </div>
        <div id="links">
          <a>Donate</a>
          <a>Create</a>
          <a>Login</a>
          <a>Other</a>
        </div>
      </div>


      <div id="body">
        <div id="contentTable">
          <h5> Contents </h5>
          <ul>
            <li>(Top)</li>
            <li> Early Life 
              <ul>
                <li> 2004 </li>
              </ul>
            </li>
            <li> Student Life 
              <ul>
                <li> 2004 </li>
              </ul>
            </li>
            <li> Future Goals
              <ul>
                <li> 2004 </li>
              </ul>
            </li>
          </ul>


        </div>
        <div id="mainBody">
          <h1 id="name"> Francesca Corbishley </h1>
          <hr></hr>
          <div id = "mainBodyContent">
            <p id = "mainBodyBio"> <span> &emsp;&emsp; Francesca "Franx" Xinhui Corbishley</span> (born May 31, 2004) is currently a junior studying Web Development & Design at Purdue University. Although she entered university as a 
              Game Development & Design student, she soon switched into her current program and even picked up a Computer Science minor in order to 
              give herself the best chance in succeeding in the industries that she hopes to work in. Right now, she is applying for full time positions as she prepares to graduate this
              spring semester. <br></br> <br></br> &emsp;&emsp; Outside of school, Francesca is passionate about both performing and listening to music. In her high school career, she was invovled with almost every
              musical organization available. She definitely enjoyed Voice Class the best where she was given the opportunity to perform solo pieces in front of an audience. This love of performance
              extends into her dance career, where she has experience in ballet, jazz, tap, and modern dance. </p>
              <div id="bio">
                <img id="portrait" src={portrait} alt = "Francesca"></img>
                <p id="portraitCaption"> Francesca & Friends 2024 </p>
                <div id="bioInfo">
                  <ul id = "titles">
                    <li> Born <br></br><br></br><br></br> </li>
                    <li> Occupation </li>
                    <li> Alma Matter </li>
                    <li> Email </li>
                  </ul>
                  <ul id = "information">
                    <li> Francesca Xinhui Corbishley <br></br> May 31, 2004 (age 20) <br></br> Pasadena, California, U.S. <br></br> </li>
                    <li> Web Development & Design Student </li>
                    <li> Purdue Univesity </li>
                    <li> fcorbish@purdue.edu </li>
                  </ul>

                </div>
              </div>
          </div>
          </div>
          
        
      </div>
      <div id="footer">

      </div>
    </div>
  )
}

export default App
