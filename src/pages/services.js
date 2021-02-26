import React from "react"
import Navbar from "../components/Navbar/Navbar"
import BottomBar from "../components/BottomBar"

const Services = () => {
   return (
      <div class='bg'>
         <title>Services</title>
         <Navbar />
         <div style={contentContainer}>
            <h1 style={TitleHeadingStyles}>
               Services at Solistic Healing
            </h1>
            <div style={primaryContentStyles}>
               <div style={TitleContentStyles}>
                  <h3 id="individual-kap" style={SectionTitle}>Ketamine Assisted Therapy - </h3>
                  <h5 style={ApproachDescriptionTextStyles}>
                     TBD
                  </h5>
                  <br />
                  <h3 id="individual-kap" style={SectionTitle}>Psychedelic Somatic Interactional Psychotherapy - </h3>
                  <h5 style={ApproachDescriptionTextStyles}>
                     <a style={links} href='https://www.psychedelicsomatic.org/'> https://www.psychedelicsomatic.org/ </a>
                  </h5>
                  <br />
                  <h3 id="individual-kap" style={SectionTitle}>Psychedelic Integration - </h3>
                  <h5 style={ApproachDescriptionTextStyles}>
                     Psychedelic Integration Therapy is designed to support people who want to increase the benefits of their psychedelic experience by processing, exploring, and implementing insights and challenges that were discovered during their psychedelic journey. The integration process is what leads to personal transformation and new ways of living in this world. Increasing education and safety around psychedelics is a key component of the integration process.
                  </h5>
                  <br />
                  <h3 id="individual-kap" style={SectionTitle}>Individual Psychotherapy - </h3>
                  <h5 style={ApproachDescriptionTextStyles}>
                     TBD
                  </h5>
                  <br />
                  <h3 id="individual-kap" style={SectionTitle}>Fees - </h3>
                  <h5 style={ApproachDescriptionTextStyles}>
                     <ul>
                        <li> Medical and psychological intake ($250 + $150) </li>
                        <li>Prep session ($150 one hour)</li>
                        <li>2 hour KAP session oral low dose ($300 therapy + $400- medical monitoring first session)</li>
                        <li>3 hour KAP session oral high dose ($450--3 hours)</li>
                        <li>2 hour IV KAP session ($300 therapy + $400 monitoring)</li>
                        <li>Integration session ($150 one hour)</li>
                     </ul>
                  </h5>
               </div>
            </div>
         </div>
         <br></br>
            <br></br>
            <br></br>
            <br></br>
         <BottomBar />
      </div>
   )
}
export default Services;

const primaryContentStyles = {
   // margin: 'auto',
   // marginTop: '10px',
   // maginBottom: '50px',
   // marginBottom: '75px'
   width: '86%',
   // border: '1px solid gray',
   // backgroundColor: 'black',
   opacity: '85%',
   borderRadius: '5px',
   padding: '20px',
}

const contentContainer = {
   display: 'flex',
   flexDirection: 'row',
   flexWrap: 'wrap',
   justifyContent: 'space-evenly',
   height: '100vh'
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

