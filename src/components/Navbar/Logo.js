// Logo.js
import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "../../assets/img/solistic-healing-logo.svg" // Tell webpack this JS file uses this image
import styled from "styled-components"

const imgStyle = {
   paddingLeft: '10px',
   paddingRight: '20px'
 }
 
const Logo = () => {
  return (
      <div style={imgStyle}>
         <img style={{height:'50px'}} src={logo} alt="Logo" />
      </div>
  )
}

export default Logo