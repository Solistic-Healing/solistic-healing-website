import React from "react"
import { Link } from "gatsby"
import Logo from '../components/Navbar/Logo'
import Navbar from "../components/Navbar/Navbar"

// styles
const pageStyles = {
   color: "#232129",
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Contact = () => (
  <div style={pageStyles}>
   <Navbar/>
  </div>
)

export default Contact;
