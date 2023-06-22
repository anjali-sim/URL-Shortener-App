import React, { useState, useEffect } from "react";
import { Button, Navigationbar, Image, List } from "./Navbar.style";
import logo from "@/assets/images/Screenshot from 2023-06-13 12-12-25.png";
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "./ToggleMenu.style";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "@/utils/firebase";

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
      <Navigationbar>
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">
              <Image src={logo} alt="Logo" />
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
            <List as={Link} to="/">
              Home
            </List>
            <List as={Link} to="/about">
              About
            </List>
            <List>Contact</List>
            <List>Features & Pricing</List>

            {isLoggedIn ? (
              <>
                <DropdownContainer>
                  <DropdownButton onClick={toggleDropdown}>
                    User Profile
                  </DropdownButton>
                  <DropdownContent open={isOpen}>
                    <DropdownItem as={Link} to="/view-profile">
                      View Profile
                    </DropdownItem>
                    <DropdownItem as={Link} to="/edit-profile">
                      Edit Profile
                    </DropdownItem>
                    <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                  </DropdownContent>
                </DropdownContainer>
              </>
            ) : (
              <>
                <List>
                  <Button as={Link} to="/login">
                    Login
                  </Button>
                </List>
                <List>
                  <Button as={Link} to="/signup">
                    SignUp
                  </Button>
                </List>
              </>
            )}
          </div>
        </div>
      </Navigationbar>
    </>
  );
};

export default Navbar;
