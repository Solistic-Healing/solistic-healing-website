import React from "react"
import Navbar from "../components/Navbar/Navbar"
import BottomBar from "../components/BottomBar"
import eric from "../assets/img/eric.jpg"
import ric from "../assets/img/ric.jpg"
import "../styles/about.css"

const About = () => {
   return (
      <div class='bg'>
         <title>About</title>
         <Navbar/>
            <div style={contentContainer}>
               <div style={infoContainer}>
                  <h1 style={titleStyle}> Eric Peterson, MA, LADC </h1>
                  <div style={bioStyle}>
                     I received my M.A in Counseling and Psychological Services from Saint Mary’s University of Minnesota with a Graduate Certificate in Addiction Studies. I currently hold an alcohol and drug counseling license (LADC) and I am receiving supervision to obtain my license for professional clinical counseling (LPCC) in the state of Minnesota. I also hold a B.A. in Psychology. I have received training in psychedelic integration from <a href="https://www.fluence8.com">Fluence</a>, ketamine-assisted therapy training from <a href="https://www.polarisinsight.com">Polaris</a> Insight Center, and Psychedelic Somatic Interactional Psychotherapy from the <a href="https://www.psychedelicsomatic.org">Psychedelic Somatic Institute</a>. 
                  </div>
                  <div style={bioStyle}>
                     My approach to healing is informed by cognitive-behavioral therapy, transpersonal psychology, person-centered therapy, & somatic and mindfulness-based therapies. I work through a biological, psychological, spiritual, and social lens when interacting with my patients. I take a strong look at how systems of oppression and control affect the mental, physical, and spiritual well-being of individuals. I believe that developing a safe and secure relationship with each of my patients is essential for them to learn new ways of thinking and behaving, to find meaning and purpose in their life, and to move towards creating a whole and complete sense of self. 
                  </div>
                  <div style={bioStyle}>
                     When I am not in my therapist role, attending trainings, or giving presentations, you can find me either rollerblading, skiing, or spending time in nature.                  </div>
                  </div>
               <div style={picturesContainer}>
                  <img style={ricky} src={ric}/>
                  <img style={activeEric} src={eric}/>
               </div>
            </div>
            {/* <br></br> */}
         <BottomBar/>
      </div>
   )
}
export default About;

const ricky = {
   height: '200px',
   borderRadius: '5px',
   // border: '1px solid gray',
   backgroundColor: 'black',
   marginTop: '25px',
}
const activeEric = {
  height: '300px',
  borderRadius: '5px',
//   border: '1px solid gray',
  backgroundColor: 'black',
  marginTop: '25px',
  marginBottom: '50px'
}
const contentContainer = {
   display: 'flex',
   flexDirection: 'row',
   flexWrap: 'wrap',
   justifyContent: 'space-evenly',
   height: '100%'
   // height: '100vh'
}
const picturesContainer = {
   display: 'flex',
   flexDirection: 'column',
   marginBottom: '60px'
}
const infoContainer = {
  width: '800px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column'
}
const bioStyle = {
//   border: '1px solid gray',
//   backgroundColor: 'black',
  color: 'whitesmoke',
  opacity: '85%',
  borderRadius: '5px',
  padding: '20px',
  letterSpacing: '1px',
  lineHeight: '1.5'
}
const titleStyle = {
  color: 'whitesmoke',
  marginLeft: '20px',
  textAlign: 'left'
}