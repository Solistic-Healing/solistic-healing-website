import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import shootingstar from "../assets/img/shootingstar.svg"

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
  //  border: '3px solid whitesmoke',
   padding: '5px'
}

// title heading styles
const TitleHeadingStyles = {
  color: 'white',
  textAlign: 'center'
//   margin: 'auto',
//   marginTop: '15px',
//   marginBottom: 64,
//   maxWidth: 4000,  
//   width: '100%'
}

 const FaqLayoutStyles = {
   // border: '3px solid whitesmoke',
   backgroundColor: '#101010',
   border: '3px solid #404040',
   width: '95%',
   borderRadius: '30px',
   // padding: '5px',
   margin: 'auto',
   // margin: '5px'
   // margin: 'auto',
 }

 const QAContentStyles = {
   margin: 'auto',
   width: '95%',
   padding: '1px',
}

const QuestionTextStyles = {
   // textAlign: 'left'
   color: 'white'
}
 
const AnswerTextStyles = {
   // textAlign: 'left'
   color: '#C0C0C0'
}
 
 const faqAccentStyles = {
   color: "gray",
 }

const Faq = () => {
   return (
      <div>
         <div style={NavStyle}>
            <Navbar/>
         </div>
      <main style={pageStyles}>
         {/* TAB TITLE */}
        <title>FAQ</title>
        {/* PAGE HEADING */}
        <div style={TitleContentStyles}>
           <h1 style={TitleHeadingStyles}>
              FAQ
           </h1>
        </div>
        {/* FAQ CONTENT */}
        <div style={FaqLayoutStyles}>
            <img style={star} src={shootingstar}/>
         <div style={QAContentStyles}>
            <h2 style={QuestionTextStyles}>
               Where are you located?
               {/* <span style={faqAccentStyles}> Grand Opening 2021! </span> */}
            </h2>
            <h3 style={AnswerTextStyles}>
               We are located in Twin Cities, MN. 
            </h3>
            <br/>
            <h2 style={QuestionTextStyles}>
               How can I get started today?
               {/* <span style={faqAccentStyles}> Grand Opening 2021! </span> */}
            </h2>
            <h3 style={AnswerTextStyles}>
               Contact us at ###-###-#### or email us solistichealing@gmail.com.
            </h3>
            <br/>
            <h2 style={QuestionTextStyles}>
               How quickly can I get help?
               {/* <span style={faqAccentStyles}> Grand Opening 2021! </span> */}
            </h2>
            <h3 style={AnswerTextStyles}>
               We do our best to get back to people within 48 hours!
            </h3>
            <br/>
            <h2 style={QuestionTextStyles}>
               How quickly can I get help?
               {/* <span style={faqAccentStyles}> Grand Opening 2021! </span> */}
            </h2>
            <h3 style={AnswerTextStyles}>
               We do our best to get back to people within 48 hours!
            </h3>
         </div>
        </div>
      </main>
      </div>
   )
}

export default Faq;