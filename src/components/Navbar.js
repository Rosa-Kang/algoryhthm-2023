import React, { useState } from 'react';
import logo from '../../public/images/logo.png';

const Navbar = () => {
  return (
      <div>
          <nav className="navbar">
              <div className="navbar-container">
                  <Link to='/' className='navbar-logo'><img src={logo} alt="" /></Link>
              </div>
          </nav>
    </div>
  )
}

export default Navbar