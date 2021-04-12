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
         <div style={descriptionHeadingStyles}>
               Offering individual psychotherapy, ketamine-assisted psychotherapy, psychedelic somatic interactional psychotherapy, and psychedelic integration services            
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
   marginTop: '0vh',
   width: '50%',
   // border: '1px solid gray',
   // backgroundColor: 'black',
   opacity: '90%',
   borderRadius: '5px',
   padding: '10px'
}
const headingStyles = {
   color: 'white',
   textAlign: 'center',
   fontSize: '60px'
}
const secondaryContentStyles = {
   margin: 'auto',
   marginTop: '12vh',
   marginBottom: '10vh',
   width: '90%',
   // backgroundColor: '#363636',
   opacity: '80%',
   // borderRadius: '5px',
   padding: '.1px',
   fontStyle: 'oblique',
   fontFamily: 'cursive'
}
const secondaryHeadingStyles = {
   color: 'white',
   textAlign: 'center'
}

const descriptionHeadingStyles = {
   color: 'white',
   textAlign: 'center',
   marginHorizontal: '100px',
   // paddingHorizonal: 10,
   padding: 4,
   fontSize: '25px',
   fontFamily: 'Tahoma, sans-serif'
}
