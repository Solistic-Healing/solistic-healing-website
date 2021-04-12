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
                  <h3 id="individual-kap" style={SectionTitle}>Ketamine Assisted Psychotherapy - </h3>
                  <h5 style={ApproachDescriptionTextStyles}>
                     The process of KAP treatment will start with a medical and psychological intake to make sure that ketamine-assisted psychotherapy is safe for you. After you are cleared to participate in KAP you will then have preparation sessions to prepare you for the ketamine experience. You will set intentions for your experience, learn how to navigate the ketamine space, and learn how to get the most benefit out of your ketamine session. After you have completed your ketamine session you will have integration sessions, which will help you apply the insights you learned into new patterns of thinking and behaving that increase your overall wellness. Every patient will have an individualized treatment plan that is customized and specific to their unique needs and goals. For more information on KAP check out the Resources or FAQ tabs. 
                  </h5>
                  <br />
                  <h3 id="individual-kap" style={SectionTitle}>Psychedelic Somatic Interactional Psychotherapy - </h3>
                  <h5 style={ApproachDescriptionTextStyles}>
                     {/* <ul> */}
                        {/* <li> */}
                           Psychedelic Somatic Interactional Psychotherapy is a different approach than the traditional non-directive psychedelic-assisted psychotherapy process. The PSIP model is focused on working directly with the nervous system to treat trauma and mental health symptoms. You will first complete a psychological intake session to determine whether PSIP treatment is safe for you. After the intake session, there will then be 1 or more preparatory sessions depending on different factors to help you be most prepared for your PSIP session. You will first do a non-medicine PSIP session to get familiar with the approach and learn to trust your body without the medicine on board. You will then engage in medicine-assisted PSIP sessions to allow your autonomic nervous system to naturally process charged trauma memories in a safe and supportive setting. Integration sessions will then follow the medicine sessions to become aware of and notice different shifts in your mind and body that resulted from the medicine sessions. The amount of PSIP sessions depends on each individual person and how they responded to previous sessions. 
                           {/* </li> */}
                        {/* <li> */}
                        <br/>
                        <br/>
                           To gain an understanding of the PSIP model to see if you are interested in participating in this treatment go to the Psychedelic Somatic Institute’s website for more information 
                           {/* <ul> */}
                              {/* <li> */}
                                 <a style={links} href='https://www.psychedelicsomatic.org/'> https://www.psychedelicsomatic.org/ </a>
                                 {/* </li> */}
                           {/* </ul> */}
                        {/* </li> */}
                     {/* </ul> */}
                  </h5>
                  <br />
                  <h3 id="individual-kap" style={SectionTitle}>Psychedelic Integration - </h3>
                  <h5 style={ApproachDescriptionTextStyles}>
                     Psychedelic Integration is designed to support people who want to increase the benefits of their psychedelic experience by processing, exploring, and implementing insights and challenges that were discovered during their psychedelic journey. The integration process is a major part of what leads to personal transformation and new ways of thinking, behaving, and relating to others. We will create a unique and individualized integration plan for you that will help you gain long term benefits from your psychedelic experience. Increasing education and safety around psychedelics is a key component of the integration process. I take a harm-reduction approach to psychedelic integration and do not supply people with psychedelics. Please do not ask where to find psychedelic substances. 
                  </h5>
                  <br />
                  <h3 id="individual-kap" style={SectionTitle}>Individual Psychotherapy - </h3>
                  <h5 style={ApproachDescriptionTextStyles}>
                  {/* <ul> */}
                        {/* <li>  */}
                           Using cognitive-behavior therapy you will learn to increase your awareness and attention to patterns of thinking and behaving that are causing you problems in your life. By developing helpful skills to change your thinking and behaviors you can learn to have a more relaxed, creative, and flexible mind. Different skills that can be learned are progressive muscle relaxation, cognitive reframing, social skills, problem solving skills, and mindfulness based exercises to become more present in the moment and quiet down your anxious thoughts.   
                           {/* </li> */}
                        {/* <li>  */}
                        <br/>
                     <br/>
                           I provide individual psychotherapy for chemical addictions, anxiety disorders, depressive disorders, and general problems in your daily life that are causing you distress. 
                           {/* </li> */}
                     {/* </ul> */}
                  </h5>
                  <br />
                  <h3 id="individual-kap" style={SectionTitle}>Fees - </h3>
                  <h5 style={ApproachDescriptionTextStyles}>
                     <ul>
                        <li> Medical and psychological intake | $250 + $150 </li>
                        <li>Preparation session | $150 one hour</li>
                        <li>2 hour Lozenge KAP session | $300 therapy + $400 - medical monitoring first session</li>
                        <li>3 hour Lozenge KAP session | $450</li>
                        <li>2 hour IV KAP session | $300 therapy + $400 monitoring</li>
                        <li>Integration session | $150 one hour</li>
                        <li>Individual Psychotherapy | $120 - $150 one hour</li>
                     </ul>
                  </h5>
               </div>
            </div>
         </div>
         <div style={footerStyles}>
            *offerings can be combined -- please contact Eric for details* <br/>
            **If cost is preventing you from seeking services, please contact Eric to discuss potential options.** <br/>
            Please call or email with questions and to schedule a free 15 minute consultation 
            <br/><br/>
            {/* <ul>
               <li>
                  ericpeterson@solistichealing.org | 612-412-4873
               </li>
            </ul> */}
            <div style={footerEmail}>ericpeterson@solistichealing.org  |  612-412-4873</div>
         </div>
         <br></br>
            <br></br>
            <br></br>
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

const footerEmail = {
   color: 'gray'
}

const footerStyles = {
   color: 'white',
   textAlign: 'center',
   margin: 'auto',
   width: '50%',
   border: '3px solid #003b59',
   padding: '15px',
}

const contentContainer = {
   display: 'flex',
   flexDirection: 'row',
   flexWrap: 'wrap',
   justifyContent: 'space-evenly',
   // height: '140vh'
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
   // lineHeight: '.5px'
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

