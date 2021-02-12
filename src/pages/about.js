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
   //  justifyContent: 'center',
   //  alignItems: 'center'
 }

 const ricky = {
   //  marginLeft: 'auto',
   //  marginRight: 'auto',
   //  width: '390px',
    height: '300px',
   //  borderRadius: '1000px',
    border: '3px solid black',
    backgroundColor: 'black',
    marginTop: '25px',
 }

 const activeEric = {
   // marginLeft: 'auto',
   // marginRight: 'auto',
   // width: '320px',
   height: '300px',
   // borderRadius: '1000px',
   border: '3px solid black',
   backgroundColor: 'black',
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
        {/* <h1 style={SectionTitle}>Our Approach</h1>
        //APPROACH CONTENT
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
        <br/> */}
         <div style={imageContainer} >
            <img style={ricky} src={ric}/>
            <img style={activeEric} src={eric}/>
            {/* <h2 style={MemberTextStyles}>Eric Peterson</h2> */}
            {/* <h4 style={MemberDescriptionTextStyles}>description goes here</h4> */}
         </div>
        {/* Who I am */}
        <h1 style={SectionTitle}>Who I am</h1>
        <div style={ApproachLayoutStyles}>
            <div>
               <h2 style={ApproachTextStyles}>Bio</h2>
               <h4 style={ApproachDescriptionTextStyles}> My name is Eric Peterson and I am the founder and lead therapist at Solistic Healing. </h4>
               <h2 style={ApproachTextStyles}>Credentials</h2>
               <h4 style={ApproachDescriptionTextStyles}>
                  <ul style={credentials}>
                     <li>Masters of Arts in Counseling and Psychological Services</li>
                     <li>Bachelors of Arts in Psychology</li>
                     <li>Graduate Certificate in Addiction Studies</li>
                     <li>Licensed Alcohol and Drug Counselor</li>
                     <li>Licensing Candidate for Professional Clinical Counseling</li>
                  </ul>
               </h4>
            </div>
         </div>
        <br/>
        <h1 style={SectionTitle}>Background</h1>
        <div style={ApproachLayoutStyles}>
            <div>
               {/* <h2 style={ApproachTextStyles}>Bio</h2> */}
               <h4 style={ApproachDescriptionTextStyles}>
                  I received my M.A in Counseling and Psychological Services from Saint Mary’s University of Minnesota with a Graduate Certificate in Addiction Studies. I currently hold an alcohol and drug counseling licence (LADC) and I am receiving supervision to obtain my license for professional clinical counseling (LPCC) in the state of Minnesota. I also hold a B.A. in Psychology. I have received training in psychedelic integration from Fluence, ketamine-assisted therapy training from Polaris Insight Center, and Psychedelic Somatic Interactional Psychotherapy from the Psychedelic Somatic Institute.  
               </h4>
               <h4 style={ApproachDescriptionTextStyles}>
                  <li>Hyperlink Fluence, Polaris, PSI</li>
               </h4>
            </div>
         </div>
         <br/>
        <h1 style={SectionTitle}>My Approach </h1>
        <div style={ApproachLayoutStyles}>
            <div>
               <h4 style={ApproachDescriptionTextStyles}>
                  My approach to healing is informed by cognitive-behavioral therapy, transpersonal psychology, person-centered therapy, & somatic and mindfulness-based therapies. I work through a biological, psychological, spiritual, and social lense when interacting with my patients. I take a strong look at how systems of oppression and control affect the mental, physical, and spiritual well-being of individuals. I believe that developing a safe and secure relationship with each of my patients is essential for them to learn new ways of thinking and behaving, to find meaning and purpose in their life, and to move towards creating a whole and complete sense of self.
               </h4>
            </div>
         </div>
         <h1 style={SectionTitle}> Outside of Work </h1>
        <div style={BottomApproachLayoutStyles}>
            <div>
               <h4 style={ApproachDescriptionTextStyles}>
                  When I am not in my therapist role, attending trainings, or giving presentations, you can find me either rollerblading, skiing, or spending time in nature.
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
export default About;