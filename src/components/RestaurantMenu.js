// import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[] );
    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4254486&lng=78.450544&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setRestInfo(json.data)
        console.log(restInfo)
    }
    // if(restInfo === null) return <Shimmer/> with below return
    return restInfo === null? (<Shimmer />):
    (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
                <li>Cool Drinks</li>
            </ul>

        </div>
    );
};

export default RestaurantMenu;