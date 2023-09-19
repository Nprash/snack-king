import {LOGO_URL} from "../UtilityFiles/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../UtilityFiles/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  // useEffect(()=>{console.log("useEffect will be called at every render cycle ")})
  const onlineStatus = useOnlineStatus();
    
  return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus? "✅" : "❌"}</li>
            <li><Link to="Home">Home</Link></li>
            <li><Link to="AboutUs">About Us</Link></li>
            <li><Link to="ContactUs">Contact Us</Link></li>
            <li><Link to="Cart">Cart</Link></li>
            <button className="login" onClick={()=>{btnName === "Login" ? setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
  {/* if else condition(ternary operator) used here to change the button */}
          </ul>
        </div>
      </div>
    )
  }

  export default Header;