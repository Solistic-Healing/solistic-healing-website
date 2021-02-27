import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import BottomBar from "../components/BottomBar"
import shootingstar from "../assets/img/shootingstar.svg"
import "../styles/faq.css"

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

const ApproachLayoutStyles = {
   // border: '3px solid whitesmoke',
   backgroundColor: 'black',
   opacity: '85%',
   border: '3px solid #404040',
   width: '95%',
   marginLeft: 'auto',
   marginRight: 'auto',
   borderRadius: '30px',
}

const BottomApproachLayoutStyles = {
   // border: '3px solid whitesmoke',
   // backgroundColor: '#101010',
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

const kap = {
   // fontStyle: 'italic',
   margin: '15px'
}

const FAQ = () => {
   return (
      <div class='bg'>
         <title>FAQ</title>
         <Navbar />
         <h1 style={TitleHeadingStyles}>
            FAQ
         </h1>
         <h2 style={SectionTitle}>Ketamine</h2>
         <div style={primaryContentStyles}>
            <div>
               <h3 style={ApproachTextStyles}>What is ketamine?</h3>
               <h4 style={ApproachDescriptionTextStyles}> Ketamine is classified as a dissociative anesthetic. Ketamine is an NMDA receptor antagonist that causes a disruption in the Default Mode Network (DMN). The DMN is network of brain regions that are coherent when we are engaging in introspection.  </h4>
               <h3 style={ApproachTextStyles}>What is ketamine used to treat at Solistic Healing?</h3>
               <h4 style={ApproachDescriptionTextStyles}>
                  Ketamine has shown to be effective for treating anxiety, post-traumatic stress disorder, major depression, and substance use disorders for alcohol and opioids.
               </h4>
               <h3 style={ApproachTextStyles}>How does ketamine work?</h3>
               <h4 style={ApproachDescriptionTextStyles}>
                  Ketamine works by allowing people to take a break from their everyday ordinary waking consciousness. People tend to have a more relaxed mind with a reduction in negative thinking that allows people to process their thoughts, beliefs, behaviors, emotions and past memories. This increase in flexible thinking is what can lead to new insights and understandings that allow personal transformation and change to occur.
               </h4>
            </div>
         </div>
         <h2 style={SectionTitle}>Ketamine-Assisted Therapy</h2>
         <div style={primaryContentStyles}>
         <div>
                  <h3 style={ApproachTextStyles}>What is Ketamine-assisted psychotherapy?</h3>
                  <h4 style={ApproachDescriptionTextStyles}>
                     Ketamine-assisted psychotherapy is using ketamine as a catalyst to enhance the therapeutic process. Ketamine is a tool that is used to assist the therapeutic process. Ketamine allows people to access material that is normally hidden from conscious awareness to then process unresolved emotions and memories that are affecting their present self. Ketamine induces a holotropic state of consciousness, a word coined by Stanislav Grof, which is a type of consciousness that moves someone towards healing and wholeness.
               </h4>
                  <h3 style={ApproachTextStyles}>What is integration?</h3>
                  <h4 style={ApproachDescriptionTextStyles}>
                     Integration is how you can maximize the benefits of KAP by starting to implement new ways of thinking and behaving into your life. It is a time to notice shifts in your life that can lead to transformation and change. Integration is about connecting the dots between past experiences and creating new meaning in your life. Integration is an ongoing process. Common practices of integration include meditation, journaling, spending time in nature, creating art, and other practices that allow you to reflect on and remember the important insights of your ketamine experience.               </h4>
                  <h3 style={ApproachTextStyles}>What is the process of KAP?</h3>
                  <h4 style={ApproachDescriptionTextStyles}>
                     There are three main components to KAP:
                  <ul style={kap}>
                        <li>Preparation</li>
                        <li>Medicine Session</li>
                        <li>Integration</li>
                     </ul>
                  The preparation stage first includes a medical and psychological intake to determine if KAP is appropriate and safe for you. The next part of the preparation stage is discussing intentions and what you hope to gain from your ketamine experience. Psychoeducation will be given on how to best navigate the ketamine space to receive the most benefits from your experience.
               </h4>
                  <h3 style={ApproachTextStyles}>How many sessions will I need?</h3>
                  <h4 style={ApproachDescriptionTextStyles}>
                     The amount of sessions will depend on each individual person. Typically people will do 3-6 sessions in a 2-3 week period. People can then do additional “booster” sessions to continue to maintain the benefits of KAP.
               </h4>
                  <h3 style={ApproachTextStyles}>What are the side effects of KAP?</h3>
                  <h4 style={ApproachDescriptionTextStyles}>
                     TBD
               </h4>
                  <h3 style={ApproachTextStyles}>What is the role of touch?</h3>
                  <h4 style={ApproachDescriptionTextStyles}>
                     Some of our deepest wounds are from childhood and hold a strong persistent sense of aloneness. It is often not enough to hear verbally that we are not alone, sometimes our system needs to feel that we are not alone through touch. Over the course of therapy our clinicians will offer therapeutic touch to create safety for these types of wounds to be felt and healed. Consent is always a part of this intervention and is built upon over time, carefully between the client and the therapist. Touch is not a requirement of therapy, so please do not hesitate to share with your therapist any concerns or objections you may have at any time.
               </h4>
                  <h3 style={ApproachTextStyles}>What is the role of music?</h3>
                  <h4 style={ApproachDescriptionTextStyles}>
                     Music is used to deepen the experience and act as a guide during the session.
               </h4>
               </div>
            </div>
            <h2 style={SectionTitle}>Psychedelic Somatic Interactional Psychotherapy </h2>
            <div style={primaryContentStyles}>
               <div>
                  <h3 style={ApproachTextStyles}>What is psychedelic somatic interactional psychotherapy (PSIP)?</h3>
                  <h4 style={ApproachDescriptionTextStyles}>
                     There are three main components to KAP:
                  <ul style={kap}>
                        <li>
                           The PSIP model treats trauma through the body by working directly with the nervous system, relationships and traumatic memory. This approach is a synthesis of mindfulness, brain research, body-based nervous system research, the therapeutic use of non-ordinary states and research on the causes and outcomes of childhood trauma and attachment wounds.
                     </li>
                        <li>
                           What results from this type of therapy is a capacity in working with one' s feelings, a renegotiated relationship to one's body and it's intelligence, an increased sense of agency and insight, and most importantly, an ability to trust oneself and one's experience. The technique is experiential and based in the present moment felt sense input. Please ask for any further information or if this raises any concerns for you.
                     </li>
                        <li>
                           The PSIP modality is designed to:
                           <ol>
                                 <li>Keep the focus on the personal (versus mystical or transcendent) and relational aspects of a client’s psychological functioning</li>
                                 <li>Activate psychobiological autonomic nervous system based, self correcting mechanisms to process anxiety, stress, depression, dissociation, PTSD, and complex relational trauma</li>
                                 <li>Establish a body based processing pathway that is preferentially engaged by psychedelic medicines due to it being more robust than the cognitive processing channels of secondary consciousness</li>
                           </ol>
                        </li>
                     </ul>
                  The preparation stage first includes a medical and psychological intake to determine if KAP is appropriate and safe for you. The next part of the preparation stage is discussing intentions and what you hope to gain from your ketamine experience. Psychoeducation will be given on how to best navigate the ketamine space to receive the most benefits from your experience.
               </h4>
                  <h3 style={ApproachTextStyles}>How does ketamine work?</h3>
                  <h4 style={ApproachDescriptionTextStyles}>
                     Ketamine works by allowing people to take a break from their everyday ordinary waking consciousness. People tend to have a more relaxed mind with a reduction in negative thinking that allows people to process their thoughts, beliefs, behaviors, emotions and past memories. This increase in flexible thinking is what can lead to new insights and understandings that allow personal transformation and change to occur.
               </h4>
               </div>
            </div> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <BottomBar />
       </div>
   )
}
export default FAQ;

const SectionTitle = {
   color: 'whitesmoke',
   paddingLeft: '35px',
   textAlign: 'left'
}

const primaryContentStyles = {
   margin: 'auto',
   marginTop: '10px',
   // maginBottom: '50px',
   width: '86%',
   // border: '1px solid gray',
   backgroundColor: 'black',
   opacity: '90%',
   borderRadius: '5px',
   padding: '10px',
   // marginBottom: '75px'
}
