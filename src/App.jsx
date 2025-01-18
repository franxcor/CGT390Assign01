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
            <li> Early Life </li>
          </ul>


        </div>
        <div id="mainBody">
          <h1 id="name"> Francesca Corbishley </h1>
          <hr></hr>
          <div id = "mainBodyContent">
            <div>
              <p class = "bodyParagraph"> <span> &emsp;&emsp; Francesca "Franx" 心卉</span> (Xīnhuì | shin hway) <span>Corbishley</span> (born May 31, 2004) is currently a junior studying <a href="https://en.wikipedia.org/wiki/Web_development">Web Development</a> & Design at <a href="https://en.wikipedia.org/wiki/Purdue_University">Purdue University.</a> Although she entered university as a 
                <a href="https://en.wikipedia.org/wiki/Game_design"> Game Development & Design </a> student, she soon switched into her current program and even picked up a <a href="https://en.wikipedia.org/wiki/Computer_science">Computer Science</a> minor in order to 
                give herself the best chance in succeeding in the industries that she hopes to work in. Right now, she is applying for full time positions as she prepares to graduate this
                spring semester. <br></br> <br></br> &emsp;&emsp; Outside of school, Francesca is passionate about both performing and listening to music. In her student years at <a href="https://en.wikipedia.org/wiki/New_Providence_High_School">New Providence High School</a>, she was invovled with almost every
                musical organization available. She definitely enjoyed Voice Class the best where she was given the opportunity to perform solo pieces in front of an audience. This love of performance
                extends into her dance career, where she has experience in <a href="https://en.wikipedia.org/wiki/Ballet">ballet</a>, <a href="https://en.wikipedia.org/wiki/Jazz">jazz</a>, <a href="https://en.wikipedia.org/wiki/Tap_dance">tap</a>, and <a href="https://en.wikipedia.org/wiki/Modern_dance">modern dance.</a> </p>
                
                <h3 class="sectionTitle"> Early Life and Education </h3>
                <hr></hr>
                <p class = "bodyParagraph"> &emsp;&emsp; Although Francesca was born in Pasadena, she was raised on the other side of the country, in New Providence, NJ. Because of her birthplace, she always dreamed of attending university on the west coast and eventually settle down in Seattle, WA. 
                  After plans didn't go her way and she ended up attending school in the midwest, she knew she wanted to return home and find a job in New York post graduation. 
                  <br></br><br></br>&emsp;&emsp;Francesca is the second youngest of 5 siblings, but was raised as a middle child with only her younger and older sister being prevalent in her life. 
                  From an early age, Francesca showed an interest in discovery and creativity and oftenf found herself reading and drawing to fill these interests. <br></br><br></br>
                  &emsp;&emsp;She attended Salt Brook School during their primary education, where they were a part of the Gifted & Talented Program and the school Orchestra. 
                  She continued onto New Provience Middle School where she continued delving into her passion for music. 
                  It was during these years that she also began to experiment with fashion and design while also balancing the need to find a real career trajectory. 
                  <br></br><br></br>
                  &emsp;&emsp;After completing high school, Francesca went on to study Web at Purdue, where she learned about the fundamentals of HTML and CSS as well as basic algorithm design. 
                  She also self-studied many computer science topics on her own using popular sources like LeetCode and HackerRank. </p>
            </div>
            
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
                    <li> Francesca 心卉 Corbishley <br></br> May 31, 2004 (age 20) <br></br> Pasadena, California, U.S. <br></br> </li>
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
