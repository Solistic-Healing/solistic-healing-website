import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import Background from "../assets/img/space-stars.jpg"

// styles
const pageStyles = {
  height: "700px",
  color: "#232129",
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
   padding: '10px'
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
    </main>
  )
}

export default IndexPage
