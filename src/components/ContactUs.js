import React from "react";
import {useState} from "react"


const Section = ({title, description, isVisible, setIsVisible}) => {
    // const toggleVisibility = () =>{setIsVisible(!isVisible)}
    return(
        <div className="w-[90%] p-4  border-2 rounded mx-4 my-8">
            <h3>{title}</h3>
            {isVisible ?(<button className="btn-primary" onClick={()=>{setIsVisible(!isVisible)}}>hide</button>):(<button className="btn-primary" onClick={()=>{setIsVisible(!isVisible)}}>show</button>)}
            {/* <button className="btn-primary" onClick={toggleVisibility}>
                {isVisible ? "Hide" : "Show"}
            </button> */}
            {isVisible && (<p>{description}</p>)}
           
        </div>
    )
}


const ContactUs = ()=>{
 
    // const [visiblesection, setVisiblesection] = useState("about")
    const [aboutVisible, setAboutVisible] = useState(true);
  const [teamVisible, setTeamVisible] = useState(true);
  const [detailsVisible, setDetailsVisible] = useState(true);
    return(
        <div>
            <h4>hello accordian</h4>
            <Section title={"instgram About"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={aboutVisible} setIsVisible={()=>{setAboutVisible(!aboutVisible)}}/>

            <Section title={"instgram Team"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={teamVisible} setIsVisible={()=>{setTeamVisible(!teamVisible)}}/>

            <Section title={"instgram Details"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={detailsVisible} setIsVisible={()=>{setDetailsVisible(!detailsVisible)}}/>
           
        </div>
    )
}

export default ContactUs;

