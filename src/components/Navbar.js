import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button';
import logo from '../images/logo.png';

import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navBackground, setNavBackground] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {showButton();}, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if (window.scrollY >= 98) {
      setNavBackground(true)
    } if(window.scrollY >= 160) {
      setNavBackground(false)
    } else {
      setNavBackground(true)
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
      <div className='nav-static'>
          <nav className={navBackground? 'navbar transparent': 'navbar'}>
        <div className="navbar-container">
                <Link to='/' className='navbar-logo'><img src={logo} alt="site-logo" height='97' /></Link>
                <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
          

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                      <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                  </li>
                  <li className='nav-link-wrapper'>
                      <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign up</Link>
                  </li>
          </ul>
              {
                button &&
                <Button buttonStyle='btn--outline' >Sign Up</Button>
              }
              </div>
          </nav>
    </div>
  )
}

export default Navbar;