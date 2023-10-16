import React from "react";
import {useState} from "react"


const Section = ({title, description, isVisible, setIsVisible}) => {
    return(
        <div className="w-[90%] p-4  border-2 rounded mx-4 my-8">
            <h3>{title}</h3>
            {isVisible ?(<button className="btn-primary" onClick={()=>{setIsVisible(false)}}>hide</button>):<button className="btn-primary" onClick={()=>{setIsVisible(true)}}>show</button>}
            {isVisible && <p>{description}</p>}
        </div>
    )
}


const ContactUs = ()=>{
    const [sectionconfig, setSectionconfig] = useState({
        showAbout:true,
        showTeam:false,
        showDetails:false,
        showCareer: false,
        showExplore:false
    })
    return(
        <div>
            <h4>hello accordian</h4>
            <Section title={"instgram About"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={sectionconfig.showAbout} setIsVisible={()=>{setSectionconfig({showAbout:true,
        showTeam:false,
        showDetails:false,showCareer: false,
        showExplore:false})}}/>

            <Section title={"instgram Team"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={sectionconfig.showTeam} setIsVisible={()=>{setSectionconfig({showAbout:false,
        showTeam:true,
        showDetails:false,showCareer: false,
        showExplore:false})}}/>

            <Section title={"instgram Details"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={sectionconfig.showDetails} setIsVisible={()=>{setSectionconfig({showAbout:false,
        showTeam:false,
        showDetails:true,showCareer: false,
        showExplore:false})}}/>
            <Section title={"Carrers of Instagram"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={sectionconfig.showCareer} setIsVisible={()=>{setSectionconfig({showAbout:false,
        showTeam:false,
        showDetails:false,showCareer: true,
        showExplore:false})}}/>
            <Section title={"explore of instagram"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={sectionconfig.showExplore} setIsVisible={()=>{setSectionconfig({showAbout:false,
        showTeam:false,
        showDetails:false,showCareer: false,
        showExplore:true})}}/>
        </div>
    )
}

export default ContactUs;




//  updated 

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
    // const [sectionconfig, setSectionconfig] = useState({
    //     showAbout:true,
    //     showTeam:false,
    //     showDetails:false,
    //     showCareer: false,
    //     showExplore:false
    // })
    const [visiblesection, setVisiblesection] = useState("about")
    return(
        <div>
            <h4>hello accordian</h4>
            <Section title={"instgram About"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={visiblesection === "about"} setIsVisible={()=>{setVisiblesection("about")}}/>

            <Section title={"instgram Team"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={visiblesection==="team"} setIsVisible={()=>{setVisiblesection("team")}}/>

            <Section title={"instgram Details"} description={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" } isVisible={visiblesection==="details"} setIsVisible={()=>{setVisiblesection("details")}}/>
           
        </div>
    )
}

export default ContactUs;