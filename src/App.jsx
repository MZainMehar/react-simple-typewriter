import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


function App() {

  return (
    <div>
      <h1>
        I'm a {' '}
        <span>
          <Typewriter
            words={['React Developer', 'Frontend Developer', 'Web Developer', 'UI/UX Designer', 'Freelancer', 'MERN Stack Developer', 'Full Stack Developer', 'Software Engineer', 'Web Designer', 'ReactJS Developer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}

export default App
