import React from "react"
import { Link } from "gatsby"
import Logo from '../components/Navbar/Logo'
import Navbar from "../components/Navbar/Navbar"
import BottomBar from "../components/BottomBar"
import '../styles/contact.css'

// styles
const pageStyles = {
   color: "#232129",
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
   marginBottom: '55px'
}

 // title content styles
 const TitleContentStyles = {
   margin: 'auto',
   width: '95%',
   padding: '5px'
}

// title heading styles
const TitleHeadingStyles = {
  color: 'white',
  textAlign: 'center'
}

const otherInfo = {
   display: 'flex',
   justifyContent: 'space-around',
   // color: 'whitesmoke',
   color: '#C0C0C0'
   // alightItems: 'center'
}

// navbar style
const NavStyle = {
   color: "#232129",
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const btn = {
   backgroundColor: '#383c66'
}

const Contact = () => (
  <div style={pageStyles}>
   <div style={NavStyle}>
      <Navbar/>
   </div>
   {/* TAB TITLE */}
   <title>CONTACT</title>
   {/* PAGE HEADING */}
   <div style={TitleContentStyles}>
      <h1 style={TitleHeadingStyles}>
         CONTACT
      </h1>
   </div>
   <div class="twoboxes">
      <div class="form">
         <input name="name" placeholder="What is your name?" class="name" required />
         <input name="emailaddress" placeholder="What is your email?" class="email" type="email" required />
         <textarea rows="4" cols="50" placeholder="Please enter your message" class="message" required></textarea>
         <input name="submit" style={btn} type="submit" value="Send" />
      </div>
      <div class="location">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.862041301893!2d-93.17051068461625!3d45.00742337909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b96aa165c91%3A0xff67265cf803d1f8!2s1611%20County%20B%20Rd%20W%20%23214%2C%20Roseville%2C%20MN%2055113!5e0!3m2!1sen!2sus!4v1612138864194!5m2!1sen!2sus" width="600" height="400" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
   </div>
   {/* <div style={otherInfo}>
      <h5>ericpeterson@solistichealing.org</h5>
      <h5>1611 County Road B West, Suite 214, Roseville, MN, 55113</h5>
   </div> */}
   <BottomBar/>
  </div>
)

export default Contact;
