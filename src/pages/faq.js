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
   margin: '15px',
   // display: 'flex',
   // wrap: 'wrap',
}

const kapTest = {
   // fontStyle: 'italic',
   margin: '15px',
   display: 'flex',
   wrap: 'wrap',
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
               <h4 style={ApproachDescriptionTextStyles}> Ketamine is a medication that has long been used safely as an anesthetic and analgesic agent. It is classified as a dissociative anesthetic. Ketamine has been used in surgical settings and pain management since its approval by FDA in 1970. It is now increasingly applied clinically as an off-label treatment for various chronic treatment-resistant mental health conditions, such as depression, anxiety disorders, alcoholism and other substance dependencies, PTSD, OCD, and other psychiatric diagnoses. It is a blocker of the cellular NMDA receptor, a neural receptor for glutamate that has proved to play a significant role in major depression, chronic pain syndromes, fibromyalgia, and other ailments. It is also known to have potent anti-inflammatory properties and is known to stimulate neuronal growth, synaptogenesis, and neuroplasticity.  </h4>
               {/* <h3 style={ApproachTextStyles}>What is ketamine used to treat at Solistic Healing?</h3>
               <h4 style={ApproachDescriptionTextStyles}>
                  Ketamine has shown to be effective for treating anxiety, post-traumatic stress disorder, major depression, and substance use disorders for alcohol and opioids.
               </h4> */}
               <h3 style={ApproachTextStyles}>How does ketamine work?</h3>
               <h4 style={ApproachDescriptionTextStyles}>
                  Ketamine works by allowing people to take a break from their everyday ordinary waking consciousness. People tend to have a more relaxed mind with a reduction in negative thinking that allows people to process their thoughts, beliefs, behaviors, emotions and past memories. This increase in flexible thinking is what can lead to new insights and understandings that allow personal transformation and change to occur.
               </h4>
               <h4 style={ApproachDescriptionTextStyles}>
                  Some feel that over time ketamine helps to retrain the mind, brain, and personality system to become more relaxed, flexible, creative, and self-compassionate. Psychedelic induced and enhanced neuroplasticity effects in the brain may play a part in the types of positive cognitive, personality and behavior shift that ketamine and KAP foster. Verbal, emotional and relational processing/integration during and after ketamine sessions seek to maximize the beneficial effects of neuroplasticity.
               </h4>
            </div>
         </div>
         <h2 style={SectionTitle}>Ketamine-Assisted Psychotherapy</h2>
         <div style={primaryContentStyles}>
            <div>
               <h3 style={ApproachTextStyles}>What is Ketamine-Assisted Psychotherapy?</h3>
               <h4 style={ApproachDescriptionTextStyles}>
                  KAP is medical treatment with Ketamine Assisted by Psychotherapy. Some people benefit more from ketamine sessions when it is paired with psychotherapy. The treatment protocol includes sessions that will prepare you for your ketamine sessions followed by assisting you in integrating your experiences afterwards.
                  The potential for change is greater when your ketamine sessions are facilitated within a structured, supportive psychotherapeutic environment with a therapist who is aware of your issues, desires, and goals for change.
                  </h4>
               <h4 style={ApproachDescriptionTextStyles}>
                  A ketamine treatment session has the potential to create a non-ordinary state of consciousness and facilitate a profound transpersonal or mystical process. These sort of peak experiences have been shown to expand one’s sense of self and understanding of existence. Ketamine may also enable you to access your own inner healing intelligence in a manner that is valuable to you. Your therapist serves as a guide, and assists in processing the experience and its impact.
                  Ketamine assisted psychotherapy varies depending on the particular problems being treated, every session can look different depending on your intentions and goals that you bring into each session.
                  </h4>
               <h4 style={ApproachDescriptionTextStyles}>
                  Initial sessions will involve an evaluation of your current problems, concerns, and needs, evaluation of your overall health, as well as evaluation of suitability of this treatment for you. It is important that we both consider if we are the best provider of these services to you and if Ketamine Assisted Psychotherapy is the best approach for your situation. The goals of therapy are arrived at by mutual collaboration. These goals will be reviewed during the course of our work together in order to assess and/or modify the treatment according to your needs. Participation in this treatment may result in a number of benefits but there is no guarantee that this will occur.
                  </h4>
               <h3 style={ApproachTextStyles}>What is integration?</h3>
               <h4 style={ApproachDescriptionTextStyles}>
                  Integration is how you can maximize the benefits of KAP by starting to implement new ways of thinking and behaving into your life. It is a time to notice shifts in your life that can lead to transformation and change. Integration is about connecting the dots between past experiences and creating new meaning in your life. Integration is an ongoing process. Common practices of integration include meditation, journaling, spending time in nature, creating art, and other practices that allow you to reflect on and remember the important insights of your ketamine experience.
                  </h4>
               <h4 style={ApproachDescriptionTextStyles}>
                  The healing process should naturally	unfold over the subsequent days, weeks, and months after completion of the treatment, or after the treatment has	entered a maintenance phase. Sometimes, it is only through later self-reflection, spontaneously-emerging insight and/or meaningful reams that important perspectives resulting	from this work may emerge and can be integrated.
                  </h4>
               <h3 style={ApproachTextStyles}>How many sessions will I need?</h3>
               <h4 style={ApproachDescriptionTextStyles}>
                  The amount of sessions is individual depending on overall treatment goals and responsiveness to the treatment. Some patients benefit from only one session, while many benefit from a series of 3-6 sessions, and some will come for more ongoing treatment sessions over months or years.
                  </h4>
               <h4 style={ApproachDescriptionTextStyles}>
                  Current research shows that 70% of patients with treatment resistant depression respond positively to 1-3 administrations, and 30-60% report having a remission of their depression for a varying length of time, some patients then receive “booster” sessions. With repeated sessions there is a cumulative effect and in combination with psychotherapy it becomes a treatment.
                  </h4>
               <h3 style={ApproachTextStyles}>What are the side effects of KAP?</h3>
               <h4 style={ApproachDescriptionTextStyles}>
                  Ketamine has an extensive record of safety and has been used at much higher doses for surgical anesthesia, without respiratory depression. As with any medication, there are also some potential risks and side effects to be informed of and to consider.
                  </h4>
               <h4 style={ApproachDescriptionTextStyles}>
                  Our setting is intended to minimize ketamine’s side effects as much as possible. You will be asked to lie still during the ketamine administration and we will invite you to use an eye mask during your treatment.
                  </h4>
               <h4 style={ApproachDescriptionTextStyles}>
                  Effects of ketamine may include distorted visualization of colors, feeling suspended in space or floating, falling sensations, experiencing out-of-body sensations, vivid dreaming and changes in visual, tactile and and auditory processing. Music that may be familiar may not be recognizable. Synesthesia (a mingling of the senses) may occur. Ordinary sense of time will morph into time dilation.
                  </h4>
               <h4 style={ApproachDescriptionTextStyles}>
                  Other possibilities for adverse effects include dizziness/lightheadedness, sedation, slurred speech, mental confusion, excitability, diminished ability to see things that are actually present, diminished ability to hear or to feel objects accurately including one’s own body, diminished awareness of physical functions such as respiration, headache, anxiety, nausea, and vomiting (although rare).
                  </h4>
            </div>
         </div>
         <h2 style={SectionTitle}>Psychedelic Somatic Interactional Psychotherapy </h2>
         <div style={primaryContentStyles}>
            <div>
               <h3 style={ApproachTextStyles}>What is psychedelic somatic interactional psychotherapy (PSIP)?</h3>
               <h4 style={ApproachDescriptionTextStyles}>
                  {/* There are three main components to KAP: */}
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
                     {/* <li> */}
                     {/* </li> */}
                  </ul>
                        * Check out videos of PSIP sessions to gain a better understanding of the approach and what a session looks like. If you have any questions regarding the PSIP model please reach out to have them answered.
                        <br/>
                        <br/>
                  <a href='https://www.psychedelicsomatic.org/resources'> https://www.psychedelicsomatic.org/resources </a>
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
