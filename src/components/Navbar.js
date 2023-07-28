import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
      <div>
          <nav className="navbar">
              <div className="navbar-container">
                <Link to='/' className='navbar-logo'><img src={logo} alt="site-logo" height='160' /></Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fa-solid fa-xmark' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>Sign up</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                  </li>
                </ul>
              </div>
          </nav>
    </div>
  )
}

export default Navbar;