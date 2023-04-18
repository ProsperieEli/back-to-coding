/*
    Here, we do an intro to the app, brief explanation, and styling to wow the user.
    A button that takes the user to the next page and a form to take down their username
    */

    import React from 'react'
import welcometext from './IntroText'
import logo from '../../logo.svg'
import './Welcome.css'    
    function Welcome() {
      return (
        <>
        <div>{welcometext}</div>
      <div className='intro'>
      <img src="elden-ring-cover-art.jpg" alt="Elden Ring" />
      <img src="God-of-War.jpg" alt="God of War" />
      <img src="Resident_Evil_4_remake_cover_art.jpg" alt="Resident Evil 4 Remake" />
    </div>
    
        </>
      )
    }
    
    export default Welcome