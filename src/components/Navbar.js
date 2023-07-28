import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button';
import logo from '../images/logo.png';

import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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

  return (
      <div>
          <nav className="navbar">
        <div className="navbar-container">
                <Link to='/' className='navbar-logo'><img src={logo} alt="site-logo" height='160' /></Link>
                <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
          

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
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