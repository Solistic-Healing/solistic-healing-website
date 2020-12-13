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

const Contact = () => (
  <div style={pageStyles}>
   <Navbar/>
   <div class="menu">hello this is a menu</div>
   <form>
		<input name="name" placeholder="What is your name?" class="name" required />
		<input name="emailaddress" placeholder="What is your email?" class="email" type="email" required />
    <textarea rows="4" cols="50" name="subject" placeholder="Please enter your message" class="message" required></textarea>
    <input name="submit" class="btn" type="submit" value="Send" />
   </form>  
  </div>
)

export default Contact;
