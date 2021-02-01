import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import BottomBar from "../components/BottomBar"
import Background from "../assets/img/circlestarsbg.jpg"

// styles
const pageStyles = {
  height: "700px",
//   color: "#232129",
//   paddingLeft: ".5vw",
//   paddingRight: ".5vw",
//   paddingTop: ".5vh",
//   paddingBottom: ".5vh",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const primaryContentStyles = {
   margin: 'auto',
   marginTop: '25px',
   width: '75%',
   border: '3px solid whitesmoke',
   // TESTING BG IMAGE
     /* The image used */
//   backgroundImage: url(Background),

  /* Full height */
//   height: '100%',

//   /* Center and scale the image nicely */
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover'
}

const headingStyles = {
  color: 'white',
  textAlign: 'center'
//   margin: 'auto',
//   marginTop: '15px',
//   marginBottom: 64,
//   maxWidth: 4000,  
//   width: '100%'
}

const rightFooterContent = {
   padding: '6px',
   textAlign: 'right'
}

const footerContent = {
   padding: '10px',
   textAlign: 'center',
   display: 'flex',
   justifyContent: 'space-between'
}
const footer = {
   position: 'fixed',
   left: 0,
   bottom: 0,
   width: '100%',
   height: '35px',
   // backgroundColor: '#dcdcdc',
   backgroundColor: 'gray',
   // color: 'gray',
   color: 'black',
   fontStyle: 'italic',
   fontFamily: 'Helvetica, cursive',
   fontSize: '12px',
   // margin: 'auto'
}
const headingAccentStyles = {
  color: "gray",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyleType: "none",
}
const listItemStyles = {
  marginBottom: 12,
  fontWeight: "300",
  letterSpacing: 1,
}
const linkStyles = {
  color: "#8954A8",
}

// data
const links = [
  {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
  },
  {
    text: "Tutorials",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "Guides",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "API Reference",
    url: "https://www.gatsbyjs.com/docs/api-reference/",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
  },
  {
    text: "Cheat Sheet",
    url: "https://www.gatsbyjs.com/docs/cheat-sheet/",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Navbar/>
      <title>Home</title>
      <div style={primaryContentStyles}>
         <h1 style={headingStyles}>
            Solistic Healing
         <br />
         <span role="img" aria-label="Party popper emojis">
            🎉
         </span>
         <span style={headingAccentStyles}> Grand Opening 2021! </span>
         <span role="img" aria-label="Party popper emojis">
            🎉
         </span>
         </h1>
      </div>
      <BottomBar/>
      {/* <div style={footer}>
         <div style={footerContent}>
            <div><b>Hours | </b> M - F 8pm - 5pm CST</div>
            <div><b>© Solistic Healing 2021</b></div>
            <div><b>Contact | </b> (651)-434-8636</div>
         </div>
      </div> */}
    </main>
  )
}

export default IndexPage
