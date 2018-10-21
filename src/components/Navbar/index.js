import React from 'react';
import './main.css';

const Navbar = () => {
    return (
      <div id="Navbar">
          <div className="logoBox">
              Amwell Tandoori
          </div>
          <div className="links">
              <div className="link">Menu</div>
              <div className="link">Book</div>
              <div className="link">Log In</div>
              <div className="link">Sign Up</div>
          </div>
      </div>  
    );
};

export default Navbar;