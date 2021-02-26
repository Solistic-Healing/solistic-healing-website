import React from "react"
import Navbar from "../components/Navbar/Navbar"
import BottomBar from "../components/BottomBar"

const Resources = () => {
   return (
      <div id="app">
         <title>Resources</title>
         <Navbar />
         <h1 style={TitleHeadingStyles}>
            Resources at Solistic Healing
         </h1>
         <div style={primaryContentStyles}>
            <div style={TitleContentStyles}>
               <h3 id="individual-kap" style={SectionTitle}>Coming Soon </h3>
            </div>
         </div>
         <BottomBar />
      </div>
   )
}
export default Resources;

const primaryContentStyles = {
   margin: 'auto',
   marginTop: '10px',
   maginBottom: '50px',
   width: '86%',
   border: '1px solid gray',
   backgroundColor: 'black',
   opacity: '85%',
   borderRadius: '5px',
   padding: '20px',
   marginBottom: '75px'
}

const TitleHeadingStyles = {
   color: 'whitesmoke',
   padding: '10px',
   textAlign: 'center'
}

const SectionTitle = {
   display: 'flex',
   wrap: 'wrap',
   color: '#C0C0C0',
   textAlign: 'left',
   lineHeight: '.5px'
}
const TitleContentStyles = {
   margin: 'auto',
   width: '95%',
}
const ApproachDescriptionTextStyles = {
   textAlign: 'left',
   paddingLeft: '20px',
   paddingTop: '0px',
   marginTop: '0px',
   marginBottom: '0px',
   color: 'gray'
}
const links = {
   color: 'gray'
}

