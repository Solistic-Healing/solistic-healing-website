import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import shootingstar from "../assets/img/shootingstar.svg"
import eric from "../assets/img/eric.jpg"

// SVG style
const star = {
   position: 'absolute',
   right: 75,
   top: 20,
   zIndex: -1,
   height: '75px',
   marginTop: '75px',
   width: 'auto'
}


// navbar style
const NavStyle = {
   color: "#232129",
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// main page layout style
const pageStyles = {
   height: "100%",
   // color: "#232129", // text color dark gray
   // backgroundColor: "#232129",
   fontFamily: "-apple-system, Roboto, sans-serif, serif",
 }

 // title content styles
 const TitleContentStyles = {
   margin: 'auto',
   width: '95%',
   // border: '3px solid whitesmoke',
   padding: '5px'
}

// title heading styles
const TitleHeadingStyles = {
  color: 'white',
  textAlign: 'center'
}

const SectionTitle = {
   color: '#C0C0C0',
   marginLeft: '40px',
   textAlign: 'left'
}

const ApproachLayoutStyles = {
   // border: '3px solid whitesmoke',
   backgroundColor: '#101010',
   border: '3px solid #404040',
   width: '95%',
   marginLeft: 'auto',
   marginRight: 'auto',
   // marginTop: '5px',
   borderRadius: '30px',
   // display: 'flex',
   // flexWrap: 'wrap',
   // justifyContent: 'space-evenly'
 }

 const TeamLayoutStyles = {
   // border: '3px solid whitesmoke',
   backgroundColor: '#101010',
   border: '3px solid #404040',
   width: '95%',
   marginLeft: 'auto',
   marginRight: 'auto',
   marginTop: '5px',
   borderRadius: '30px',
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'space-evenly',
   marginBottom: '45px'
 }

 const member = {
    verticalAlign: 'middle',
    width: '200px',
    height: '200px',
    borderRadius: '1000px',
    border: '3px solid #404040',
    backgroundColor: 'white',
    margin: '25px',
 }

 const PersonContentStyles = {
   margin: 'auto',
   width: '20%',
   padding: '1px',
}

const MemberTextStyles = {
   textAlign: 'center',
   color: 'whitesmoke'
}
 
const MemberDescriptionTextStyles = {
   textAlign: 'center',
   color: 'gray'
}

const ApproachTextStyles = {
   textAlign: 'left',
   paddingLeft: '20px',
   color: 'whitesmoke'
}
 
const ApproachDescriptionTextStyles = {
   textAlign: 'left',
   paddingLeft: '20px',
   color: 'gray'
}
 
 const faqAccentStyles = {
   color: "gray",
 }

const About = () => {
   return (
      <div>
         <div style={NavStyle}>
            <Navbar/>
         </div>
      <main style={pageStyles}>
         {/* TAB TITLE */}
        <title>ABOUT</title>
        {/* PAGE HEADING */}
        <div style={TitleContentStyles}>
           <h1 style={TitleHeadingStyles}>
              ABOUT
           </h1>
        </div>
        {/* Our Approach */}
        <h1 style={SectionTitle}>Our Approach</h1>
        {/* APPROACH CONTENT */}
        <div style={ApproachLayoutStyles}>
            <div>
               <h2 style={ApproachTextStyles}>Led by Science</h2>
               <h4 style={ApproachDescriptionTextStyles}>Our team is passionate about science and it is important to us ... </h4>
            </div>
            <br/>
            <div>
               <h2 style={ApproachTextStyles}>Led by Science</h2>
               <h4 style={ApproachDescriptionTextStyles}>Our team is passionate about science and it is important to us ... </h4>
            </div>
            <br/>
            <div>
               <h2 style={ApproachTextStyles}>Led by Science</h2>
               <h4 style={ApproachDescriptionTextStyles}>Our team is passionate about science and it is important to us ... </h4>
            </div>
         </div>
        <br/>
        {/* Get to know the Team Header */}
        <h1 style={SectionTitle}>Our Team</h1>
        {/* TEAM CONTENT */}
        <div style={TeamLayoutStyles}>
            <img style={star} src={shootingstar}/>
         <div >
            <img style={member} src={eric}/>
            <h2 style={MemberTextStyles}>Eric Peterson</h2>
            <h4 style={MemberDescriptionTextStyles}>description goes here</h4>
         </div>
         <div >
            <img style={member} src={eric}/>
            <h2 style={MemberTextStyles}>Eric Peterson</h2>
            <h4 style={MemberDescriptionTextStyles}>description goes here</h4>
         </div>
         <div >
            <img style={member} src={eric}/>
            <h2 style={MemberTextStyles}>Eric Peterson</h2>
            <h4 style={MemberDescriptionTextStyles}>description goes here</h4>
         </div>
         <div >
            <img style={member} src={eric}/>
            <h2 style={MemberTextStyles}>Eric Peterson</h2>
            <h4 style={MemberDescriptionTextStyles}>description goes here</h4>
         </div>
        </div>
      </main>
      </div>
   )
}
export default About;