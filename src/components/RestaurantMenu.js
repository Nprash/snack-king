// import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[] );
    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=344287&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);
        setRestInfo(json.data)
        console.log(json.data)
    };
    const {name, cuisines} = restInfo?.cards[0]?.card?.card?.info;
    // if(restInfo === null) return <Shimmer/> with below return
    return restInfo === null? (<Shimmer />):
    (
        <div className="menu">
            <h1>{name}</h1>
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