import React, {useContext} from "react";
import Usercontext from "../UtilityFiles/Usercontext";



const Footer = () => {
    const {user} = useContext(Usercontext)


    return(
        <div className="w-full h-40 border-top border">
            <p>this is a footer component</p>
            <span>this site is developed by {user.name}</span>
        </div>
    )
}

export default Footer;