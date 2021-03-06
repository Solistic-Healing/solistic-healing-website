// Navbar.js
import React, { useState } from "react"
import NavbarLinks from "./Navbar/NavbarLinks"
// import Logo from "..Navbar/Logo"
import styled from 'styled-components'
import '../styles/bottombar.css'


const footerContent = {
   padding: '10px',
   display: 'flex',
   textAlign: 'center',
   alignItems: 'center',
   justifyContent: 'space-between'
}
const footer = {
   position: 'fixed',
   left: 0,
   bottom: 0,
   width: '100%',
   height: '6vh',
   backgroundColor: '#363636',
   // color: 'gray',
   color: 'black',
   // fontStyle: 'italic',
   // fontFamily: 'Helvetica, cursive',
   fontSize: '14px',
   color: 'white',
   // marginTop: '400px'
   // margin: 'auto'
}

const Navigation = styled.nav`
  bottom: 0px
  height: 75px;
  display: flex;
  background-color: #383c66;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  font-weight: bold;
  margin: 0 auto;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const BottomBar = () => {
   // const [navbarOpen, setNavbarOpen] = useState(false)

   return (
      <div style={footer}>
      <div style={footerContent}>
         <div>
            {/* <b>Phone Number | </b>  */}
            (612) 412-4873
         </div>
         <div id='email'><b>© Solistic Healing 2021</b></div>
         <div>
            {/* <b>Email | </b>  */}
            ericpeterson@solistichealing.org
         </div>
      </div>
   </div>
   )
}

export default BottomBar