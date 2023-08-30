// import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=344287&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);
        setRestInfo(json.data)
        console.log(json.data)
    };
    if (restInfo === null) return (<Shimmer />);
    // const {name,cuisines, costForTwoMessage, } = restInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
    return (
        <div className="menu">
            {/* <h1>{name}</h1>
                <h3>{cuisines}</h3>
                <h3>{costForTwoMessage}</h3> */}
            <h2>Menu</h2>
            <ul>
                <li>{itemCards[0].card.info.name}</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
                <li>Cool Drinks</li>
            </ul>

        </div>
    );
};

export default RestaurantMenu;