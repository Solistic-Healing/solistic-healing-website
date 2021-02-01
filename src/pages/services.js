import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import BottomBar from "../components/BottomBar"
import shootingstar from "../assets/img/shootingstar.svg"
import eric from "../assets/img/eric.jpg"
import ric from "../assets/img/ric.jpg"

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
   // padding: '10px'
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
   borderRadius: '30px',
 }

 const BottomApproachLayoutStyles = {
   // border: '3px solid whitesmoke',
   backgroundColor: '#101010',
   border: '3px solid #404040',
   width: '95%',
   marginLeft: 'auto',
   marginRight: 'auto',
   marginBottom: '70px',
   borderRadius: '30px',
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

 const imageContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
 }

 const member = {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '375px',
    height: '250px',
    borderRadius: '1000px',
    border: '3px solid #404040',
    backgroundColor: 'white',
    marginTop: '25px',
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

 const credentials = {
   fontStyle: 'italic',
 }

 const links = {
    color: 'gray'
 }

const Services = () => {
   return (
      <div>
         <div style={NavStyle}>
            <Navbar/>
         </div>
      <main style={pageStyles}>
         {/* TAB TITLE */}
        <title>SERVICES</title>
        {/* PAGE HEADING */}
        <div style={TitleContentStyles}>
           <h1 style={TitleHeadingStyles}>
              SERVICES
           </h1>
        </div>
        {/* Who I am */}
        <h1 id="individual-kap" style={SectionTitle}>Individual KAP</h1>
        <div style={ApproachLayoutStyles}>
            <div>
               <h4 style={ApproachDescriptionTextStyles}>
                  TBD
               </h4>
            </div>
         </div>
        <br/>
        <h1 style={SectionTitle}>Psychedelic Somatic Interactional Psychotherapy</h1>
        <div style={ApproachLayoutStyles}>
            <div>
               <h4 style={ApproachDescriptionTextStyles}>
                  <a style={links} href='https://www.psychedelicsomatic.org/'> https://www.psychedelicsomatic.org/ </a>
               </h4>
            </div>
         </div>
         <br/>
        <h1 style={SectionTitle}>Psychedelic Integration</h1>
        <div style={ApproachLayoutStyles}>
            <div>
               <h4 style={ApproachDescriptionTextStyles}>
                  Psychedelic Integration Therapy is designed to support people who want to increase the benefits of their psychedelic experience by processing, exploring, and implementing insights and challenges that were discovered during their psychedelic journey. The integration process is what leads to personal transformation and new ways of living in this world. Increasing education and safety around psychedelics is a key component of the integration process.
               </h4>
            </div>
         </div>
         <h1 style={SectionTitle}> Fees </h1>
        <div id="outsideofwork" style={BottomApproachLayoutStyles}>
            <div>
               <h4 style={ApproachDescriptionTextStyles}>
                  TBD             
               </h4>
            </div>
         </div>
        {/* Get to know the Team Header */}
        {/* <h1 style={SectionTitle}>Our Team</h1> */}
        {/* TEAM CONTENT */}
        {/* <div style={TeamLayoutStyles}>
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
        </div> */}
      </main>
      <BottomBar/>
      </div>
   )
}
export default Services;