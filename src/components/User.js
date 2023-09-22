import { useState } from "react";

const User =(props)=>{
const [count] = useState(0);

// const useEffects(()=>{
//     const timer = settimeinterval(()=>{console.log("set time interval is called in useeffect")}, 100);
// },[]);

    return(
        <div className="user-card w-5/12 m-auto">
            <p>useState example to use in functional component count={count}</p>
            <h2>Name : {props.Name} </h2>
            <h3>Location:  Hyderabad</h3>
            <h4>Contact: @gmail.com</h4>
        </div>
    )
};


export default User;