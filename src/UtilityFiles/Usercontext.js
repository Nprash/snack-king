import React, {createContext} from "react";


const Usercontext = createContext({ user:{
    name:"dummy name",
    email: "dummy@gmail.com",
},});


Usercontext.displayName = "UserContext";  //to show this in react dev tools, if there more than one context we can name it like this and we can use
export default Usercontext;