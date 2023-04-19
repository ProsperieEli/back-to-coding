/*
    Here, we do an intro to the app, brief explanation, and styling to wow the user.
    A button that takes the user to the next page and a form to take down their username
    */

    import React, { useEffect, useState } from 'react'
import welcometext from './IntroText'
import logo from '../../logo.svg'
import './Welcome.css'    
import { Link } from 'react-router-dom'
    function Welcome() {
      const [currentImage, setCurrentImage] = useState(0)
      const imagePaths = ["Resident_Evil_4_remake_cover_art.jpg","God-of-War.jpg", "elden-ring-cover-art.jpg",]
      
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImage(currentImage => (currentImage + 1) % imagePaths.length);
        }, 3000);
        return () => clearInterval(intervalId);
      }, []);
    

      return (
        <div className='website'>
      <div>{welcometext}</div>
      <div className='carousel-container'>
        <div className='carousel-wrapper' style={{left: `-${currentImage * 100}%` }}>
        {imagePaths.map((path) =>
        <img src={path} alt='game cover art' key={path} />)}
        </div>
    </div>  

    <button>Ready to browse?</button>
        </div>
      )
    }
    
    export default Welcome