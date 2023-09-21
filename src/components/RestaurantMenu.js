// import React from "react";
import { useState, useEffect } from "react";
import Menushimmer from "./Menushimmer";
import { useParams } from "react-router-dom";
import { Menu_API_2 } from "../UtilityFiles/constants";
import {CDN_URL} from "../UtilityFiles/constants";
import useRestaurantMenu from "../UtilityFiles/useRestaurantMenu";


const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  // console.log(resId); see 22 line
  // im creating custom hooks for fetching restinfo from API , no ned to use useState hook
  // const restInfo = useRestaurantMenu(resId);


  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=3324&catalog_qa=undefined&submitAction=ENTER");
    const data = await fetch(Menu_API_2 + resId);
    // console.log(data);
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4254486&lng=78.450544&restaurantId=344287&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    // console.log(json);
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
  // console.log(restInfo);
  Object.keys(itemCards).length
  return (
    <div className="bg-slate-100">
      <div className="pt-4 flex justify-between m-auto w-3/5 items-center h-16">
        <div className="items-center font-normal text-[11px] text-slate-500">
          <span>Home </span>
          <span>/ {city} </span>
          <span className="text-slate-600 font-medium"> / {name}</span>
        </div>
        <button>
          <i className="bi bi-search text-[17px] font-bold"></i>
        </button>
      </div>

      <div className="w-3/5 flex justify-between items-center m-auto pt-4 mb-3">
        <div className="pl-3 w-4/5">
          <h1 className="font-bold">{name} <span className="font-normal text-[10px] text-slate-400">{Object.keys(itemCards).length} Items Found in this restaurant</span></h1>
          <p className="font-normal text-slate-600 pt-3 text-sm">{cuisines.join(",")}</p>
          <span className="font-normal text-slate-600 text-sm">{areaName}</span>
        </div>
        <div className="border p-2 rounded-lg shadow-sm">
          <div className="items-center flex">
            <span className="text-green-500 font-bold">
              <i className="bi bi-star-fill"></i> {avgRating}
            </span>
          </div>
          <hr style={{ height: "1px", width: "30px", margin: "auto" }} />
          <div className="font-medium text-slate-600 text-sm"><span>{totalRatingsString}</span></div>
        </div>
      </div>
      <div>
        <div className="flex w-3/5 m-auto pl-3">
          {/* <i className="bi bi-info-circle-fill"></i> */}
          <img className="w-5 h-5" src={CDN_URL+expectationNotifiers[0]?.icon?.imageId} alt="image" />
          <span className="pl-2 text-slate-600 text-sm">{feeDetails.message}</span>
        </div>
        <hr className="w-3/5 m-auto border-b border-dashed border-gray-300" />
      </div>

      <div className="time-cost w-3/5 flex m-auto pl-2">
        <ul className="flex w-64 justify-around items-center pt-3">
          <li className="flex justify-around items-center">
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
            <span className="px-2 font-medium">{sla.slaString}</span>
          </li>
          <li className="second-li flex justify-around items-center">
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
            <span className="px-2 font-medium">{costForTwoMessage}</span>
          </li>
        </ul>
      </div>

      <div className="submenu">
        {/* <h3>Menu</h3> */}
        <ul className="grid grid-rows-1 w-3/5 m-auto">
          {itemCards.map((item) => (
            <li key={item.card.info.id} className="my-4">
              <div className="flex pb-4 justify-between items-center">
                <div className="submenu-sub2">
                  <div><span>{}</span></div>
                  <div><span>{item.card.info.name}</span></div>
                  <div><span>-Rs.{" "}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span></div>
                </div>

                <div className="w-28 h-24 "><img className="rounded-lg" src={CDN_URL+item.card.info.imageId} alt="image" /></div>
              </div>
              <hr className="w-3/5 m-auto border-b border-dashed border-gray-300" />
            </li>
            
          ))}
        </ul>
      </div>

      {/* || if I dont find 1st one it will show the 2nd one */}
    </div>
  );
};

export default RestaurantMenu;
