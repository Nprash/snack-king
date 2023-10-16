import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import Usercontext from "../UtilityFiles/Usercontext";


class AboutUs extends React.Component{
  constructor(props){
    super(props)
    // console.log("parent constructor called")
  }
  componentDidMount(){ 
    
    // console.log("parent componentDidmounted")
  
  }


  render(){
    // console.log("parent render called")
    return (
      <div>
        <h1>AboutUs</h1>
        <Usercontext.Consumer>
          {({user})=><h4 className="font-bold"> these are testing useContext hook which enables to staore data and able to use wherever we want in our App {user.name}  =====  {user.email}</h4>
          
          }
        </Usercontext.Consumer>
        
        {/* <UserClass Name={"1st-child biden"} Location={"US"} Email={"contact@gmail.com"}/> */}
        <User/>
        
      </div>
    );
  }
}
/*
  react class based component lifecycle

Parent Constructor
- Parent render
First Constructor
• First Render
- Second Constructor
- Second Render
uPOATEO SINGLE BATCH'
• First Co•øonentOidNoun
• Second ComponentOidNOunt
- Parent ComponentOit"ount
*/


// const AboutUs = () => {
//   return (
//     <div>
//       <h1>AboutUs</h1>
//       {/* <User Name={"Prasanth's Function"}/> */}
//       <UserClass Name={"N~Prasnth"} Location={"Punjagutta--Hyderabad"} Email={"contact@gmail.com"}/>
//     </div>
//   );
// };

export default AboutUs;
