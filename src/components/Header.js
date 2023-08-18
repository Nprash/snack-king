import {LOGO_URL} from "../UtilityFiles/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="About Us">About Us</a></li>
            <li><a href="Contact Us">Contact Us</a></li>
            <li><a href="Cart">Cart</a></li>
            <button className="login" onClick={()=>{setbtnName("Logout")}}>{btnName}</button>
  
          </ul>
        </div>
      </div>
    )
  }

  export default Header;