import React from 'react';
import { Button } from '../Button/Button';

import './style.css';


const HeroSection = () => {
  return (
      <div className='hero-container'>
          <video src="/videos/video-1.mp4" autoPlay loop muted></video>
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
          <div className="hero-btns">
              <Button className='btns' buttonStyle='btn--outline'
                  buttonSize='btn--large'
              >GET STARTED</Button>
              <Button className='btns' buttonStyle='btn--primary'
                  buttonSize='btn--large'
              >WATCH TRAILER
                  <i className="fa-solid fa-play"></i>
              </Button>
          </div>
    </div>
  )
}

export default HeroSection