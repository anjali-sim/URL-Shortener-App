import React, { useState, useEffect } from 'react';
import { Button, NavbarStyle, Image, ListStyle } from './Navbar.style';
import logo from "../../assets/images/Screenshot from 2023-06-13 12-12-25.png";
import { DropdownContainer, DropdownButton, DropdownContent, DropdownItem } from './ToggleMenu.style';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../../utils/firebase";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setIsLoggedIn(true);
      } else {
        // User is logged out
        setIsLoggedIn(false);
        navigate("/");
      }
    });

    return () => {
      unsubscribe(); // Clean up the listener on unmount
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Successful logout
        setIsLoggedIn(false);
      })
      .catch((error) => {
        // Handle logout error
        console.log(error);
      });
  };

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
            <ListStyle as={Link} to="/">Home</ListStyle>
            <ListStyle as={Link} to="/about">About</ListStyle>
            <ListStyle>Contact</ListStyle>
            <ListStyle>Features & Pricing</ListStyle>

            {isLoggedIn ? (
              <>
                <DropdownContainer>
                  <DropdownButton onClick={toggleDropdown}>User Profile</DropdownButton>
                  <DropdownContent open={isOpen}>
                    <DropdownItem as={Link} to="/edit-profile">Edit Profile</DropdownItem>
                    <DropdownItem >Settings</DropdownItem>
                    <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                  </DropdownContent>
                </DropdownContainer>
              </>
            ) : (
              <>
                <ListStyle>
                  <Button as={Link} to="/login">
                    Login
                  </Button>
                </ListStyle>
                <ListStyle>
                  <Button as={Link} to="/signup">
                    SignUp
                  </Button>
                </ListStyle>
              </>
            )}
          </div>
        </div>
      </NavbarStyle>
    </>
  );
};

export default Navbar;
