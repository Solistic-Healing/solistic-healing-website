import * as React from "react"
import Navbar from "../components/Navbar/Navbar"
import BottomBar from "../components/BottomBar"
import "../styles/index.css"

const IndexPage = () => {
   return (
      <div id="app">
         <title>Home</title>
         <Navbar />
         <div style={primaryContentStyles}>
            <h1 style={headingStyles}>
               Solistic Healing
            </h1>
         </div>
         <div style={secondaryContentStyles}>
            <h3 style={secondaryHeadingStyles}>
               The two most important days in your life are the day you're born and the day you find out why <br></br>- Mark Twain
            </h3>
         </div>
         <BottomBar />
      </div>
   )
}
export default IndexPage


const primaryContentStyles = {
   margin: 'auto',
   marginTop: '20vh',
   width: '50%',
   border: '1px solid gray',
   backgroundColor: 'black',
   opacity: '75%',
   borderRadius: '5px',
   padding: '20px'
}
const headingStyles = {
   color: 'white',
   textAlign: 'center'
}
const secondaryContentStyles = {
   margin: 'auto',
   marginTop: '5vh',
   width: 'auto',
   backgroundColor: '#363636',
   opacity: '80%',
   borderRadius: '5px',
   padding: '.1px'
}
const secondaryHeadingStyles = {
   color: 'white',
   textAlign: 'center'
}

