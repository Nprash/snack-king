// import React from "react";
import { useState, useEffect } from "react";
import Menushimmer from "./Menushimmer";
import { useParams } from "react-router-dom";
import { Menu_API_2 } from "../UtilityFiles/constants";
import {CDN_URL} from "../UtilityFiles/constants";


const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=3324&catalog_qa=undefined&submitAction=ENTER");
    const data = await fetch(Menu_API_2 + resId);
    // console.log(data);
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=344287&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setRestInfo(json.data);
  };
  if (restInfo === null) return <Menushimmer />;
  // dominos piza api https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=24631&catalog_qa=undefined&submitAction=ENTER
  // old tifins api   https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=344287&catalog_qa=undefined&submitAction=ENTER
  // 2nd restorent ovenstory piza latest API data link: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=25406&catalog_qa=undefined&submitAction=ENTER
  
  
  const {name,cuisines,costForTwoMessage,city,areaName,totalRatingsString
    ,expectationNotifiers,feeDetails,avgRating,sla,} = restInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  // console.log(itemCards);
  return (
    <div className="menu">
      <div className="area">
        <div>
          <span>Home</span>
          <span>/{city}</span>
          <span>/{name}</span>
        </div>
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="restaurant-intro">
        <div className="restaurant-details">
          <h1>{name}</h1>
          <p>{cuisines.join(",")}</p>
          <span>{areaName}</span>
        </div>
        <div className="for-rating">
          <div className="span1">
            <span>
              <i className="bi bi-star-fill"></i> {avgRating}
            </span>
          </div>
          <hr style={{ height: "1px", width: "30px", margin: "auto" }} />
          <div className="sapn2"><span>{totalRatingsString}</span></div>
        </div>
      </div>
      <div>
        <p className="notify">
          {/* <i className="bi bi-info-circle-fill"></i> */}
          <img className="notify-img" src={CDN_URL+expectationNotifiers[0]?.icon?.imageId} alt="image" />
          <span>{feeDetails.message}</span>
        </p>
        <hr className="notify-line" />
      </div>

      <div className="time-cost">
        <ul>
          <li className="first-li">
            <svg
              className="RestaurantTimeCost_icon__8UdT4"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                stroke="#3E4152"
                strokeWidth="1.3"
              ></circle>
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              ></path>
            </svg>
            <span>{sla.slaString}</span>
          </li>
          <li className="second-li">
            <svg
              className="RestaurantTimeCost_icon__8UdT4"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="8.25"
                stroke="#3E4152"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              ></path>
            </svg>
            <span>{costForTwoMessage}</span>
          </li>
        </ul>
      </div>

      <div className="submenu">
        {/* <h3>Menu</h3> */}
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              <div className="submenu-sub1">
                <div className="submenu-sub2">
                  <div><span>{}</span></div>
                  <div><span>{item.card.info.name}</span></div>
                  <div><span>-Rs.{" "}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span></div>
                </div>

                <div className="map-li-4thdiv"><img className="item-image" src={CDN_URL+item.card.info.imageId} alt="image" /></div>
              </div><hr className="notify-line" />
            </li>
            
          ))}
        </ul>
      </div>

      {/* || if I dont find 1st one it will show the 2nd one */}
    </div>
  );
};

export default RestaurantMenu;
