import React from 'react'
import {Button, NavbarStyle} from './Navbar.style';
import ListStyle from './List.style';

const Navbar:React.FC = () => {
  return (
    <>
        <NavbarStyle>
      <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      JoGeek
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <ListStyle>Home</ListStyle>
    <ListStyle>About</ListStyle>
    <ListStyle>Contact</ListStyle>
    <ListStyle>Features & Pricing</ListStyle>
    <Button>Login</Button>
    <Button>SignUp</Button>
  </div>
</div>
</NavbarStyle>
    </>
  )
}

export default Navbar;
