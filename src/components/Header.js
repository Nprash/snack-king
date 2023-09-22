import {LOGO_URL} from "../UtilityFiles/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../UtilityFiles/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  // useEffect(()=>{console.log("useEffect will be called at every render cycle ")})
  const onlineStatus = useOnlineStatus();
    
  return (
      <div className="w-full flex justify-between shadow-sm">
        <div className="h-28 w-28 ">
          <img className="bg-contain bg-center" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul className="flex py-10 w-auto mr-6">
            <li className="px-2">Online Status: {onlineStatus? "🟢" : "🔴"}</li>
            <Link to="Home"><li className="px-2">Home</li></Link>
            <Link to="AboutUs"><li className="px-2">About Us</li></Link>
            <Link to="ContactUs"><li className="px-2">Contact Us</li></Link>
            <Link to="Grocery"><li className="px-2">Grocery</li></Link>
            <Link to="Cart"><li className="px-2">Cart</li></Link>
            <li className="px-2 w-16"><button className="px-2" onClick={()=>{btnName === "Login" ? setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button></li>
  {/* if else condition(ternary operator) used here to change the button */}
          </ul>
        </div>
      </div>
    )
  }

  export default Header;