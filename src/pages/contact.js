import React from "react"
import { Link } from "gatsby"
import Logo from '../components/Navbar/Logo'
import Navbar from "../components/Navbar/Navbar"
import '../styles/contact.css'

// styles
const pageStyles = {
   color: "#232129",
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
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

// navbar style
const NavStyle = {
   color: "#232129",
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
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
         <textarea rows="4" cols="50" name="subject" placeholder="Please enter your message" class="message" required></textarea>
         <input name="submit" class="btn" type="submit" value="Send" />
      </div>
      <div class="location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2823.99606310282!2d-93.10539168461852!3d44.943747979098305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x87f62ab6adca1f37%3A0x3670355ea7f53cfb!2s202%207th%20St%20W%2C%20St%20Paul%2C%20MN%2055102!3m2!1d44.943748!2d-93.103203!5e0!3m2!1sen!2sus!4v1610321350836!5m2!1sen!2sus" width="600" height="400" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
   </div>
  </div>
)

export default Contact;
