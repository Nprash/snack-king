// import React from "react";
import { useState, useEffect } from "react";
import Menushimmer from "./Menushimmer";
import { useParams } from "react-router-dom";
import {Menu_API_2} from "../UtilityFiles/constants";


const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const {resId} = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=3324&catalog_qa=undefined&submitAction=ENTER");
    const data = await fetch(Menu_API_2 + resId);
    console.log(data);
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=344287&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    // console.log(json);
    setRestInfo(json.data);
  };
  if (restInfo === null) return <Menushimmer />;
  // dominos piza api https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=24631&catalog_qa=undefined&submitAction=ENTER
  // old tifins api   https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=344287&catalog_qa=undefined&submitAction=ENTER
  // 2nd restorent ovenstory piza latest API data link: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=25406&catalog_qa=undefined&submitAction=ENTER
  const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   console.log(itemCards);
  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -Rs.{" "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
      {/* || if I dont find 1st one it will show the 2nd one */}
    </div>
  );
};

export default RestaurantMenu;
