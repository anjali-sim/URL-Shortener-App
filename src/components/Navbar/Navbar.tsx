import React from 'react'
import {Button, NavbarStyle, Image} from './Navbar.style';
import ListStyle from './List.style';
import logo from "../../assets/images/Screenshot from 2023-06-13 12-12-25.png"

const Navbar:React.FC = () => {
  return (
    <>
      <NavbarStyle>
        <div className="nav">
          <input type="checkbox" id="nav-check" />
            <div className="nav-header">
              <div className="nav-title">
                <Image src={logo} alt="Logo" />
                {/* LinkZip */}
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
