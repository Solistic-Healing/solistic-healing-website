// NavbarLinks.js
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from '../Navbar/Logo'
import '../../styles/navbarlinks.css'



const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-size: 20px;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #f7c46f;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #9ca4ac;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 0;
  }
`

const NavbarLinks = () => {
   return (
      <>
         <Logo />
         <NavItem to="/">Home</NavItem>
         <NavItem to="/about">About</NavItem>
         <NavItem to="/services">
            <div class="dropdown">
               <span>Services</span>
               <div class="dropdown-content">
                  <p to="/services#individual-kap">Individual KAP  </p>
                  <p class="dropdown-item" to="/services#individual-kap">Psychedelic Somatic Interactional Psychotherapy </p>
                  <p class="dropdown-item" to="/services">Psychedelic Integration </p>
                  <p class="dropdown-item" to="/services">Fees </p>
               </div>
            </div>
         </NavItem>
         <NavItem to="/resources">
            <div class="dropdown">
               <span>Resources</span>
               <div class="dropdown-content">
                  <p to="/services">Articles/videos </p>
                  <p class="dropdown-item" to="/services">Research </p>
                  <p class="dropdown-item" to="/services">Forms </p>
                  {/* <p class="dropdown-item" to="/faq">FAQ </p> */}
               </div>
            </div>
         </NavItem>
         <NavItem to="/faq">FAQ</NavItem>
         <NavItem to="/contact">Contact</NavItem>
      </>
   )
}

export default NavbarLinks