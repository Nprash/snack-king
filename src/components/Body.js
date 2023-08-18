import RestaurantCard from "./RestaurantCard";
import { restaurantObj } from "../UtilityFiles/mockDataAPI"
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [fixedRestaurantObject, setFixedRestaurantObject] = useState();

    const [ListOfRestaurants, setListOfRestaurants] = useState();

    const [searchtext, setSearchtext] = useState();


    function searchRest(value, list) {
        let filteredList = list.filter((resData) => {
            // console.log(resData.info.name);
            return resData.info.name.toLowerCase().includes(value.toLowerCase())
        });
        // return restaurantObjectF
        setListOfRestaurants(filteredList);
    }

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4254486&lng=78.450544&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

        setFixedRestaurantObject(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // to store listofrestaurants inititally
        // console.dir(json)
        // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);

        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.dir(ListOfRestaurants);


        // above line indicates to get data from API but its not a good way to fetch data

        //use optional chaining:---
        // setListOfRestaurants(json?.data?.cards[2]?.data?.cards)

        //now i can't read the data due to unstructered data found in API
    };

    console.log(fixedRestaurantObject);
    console.log(ListOfRestaurants)

   

    // if (navigator.onLine) {
    //     console.log("online");
    //   } else {
    //     console.log("offline");
    //   }
      
// this is conditional rendering
    if (ListOfRestaurants == undefined) {
        let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

        return (
            <div className="dflex">
                {
                    count.map((k) => {
                        return <Shimmer />
                    })
                 }
            </div>
        )
    }

    // we can add this directly into below return with terinary operator 

    // ListOfRestaurants.leangth===0 ? <Shimmer /> :     below will be returned
    return ListOfRestaurants == undefined ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search Something Delicious" value={searchtext} onChange={(e) => {
                    setSearchtext(e.target.value)
                    searchRest(e.target.value, fixedRestaurantObject)
                }} />
                <button className="filter-btn" onClick={() => {


                    setListOfRestaurants(ListOfRestaurants);
                    // console.log(setRestaurantObject);

                }}>Top Rated Items</button>
            </div>
            <div className="restaurant-container pattern-dots-sm ">

                {//its an optional chaining "?"
                    ListOfRestaurants?.map((data) => {
                        return <RestaurantCard key={data.info.id} resData={data} />
                    })
                }
            </div>
        </div>
    )


}

export default Body;


{/* {
            resData.map((e, i) => {
              return <RestaurantCard props={e} key={i} />
  
            })
          } */}
{/* <RestaurantCard resName="megna foods" cussine="biryani, samosa" rating="4" delivery="30minutes"/>
                  <RestaurantCard resName="KFC" cussine="burger, chicken" rating="4.5" delivery="20minutes"/> */}
      //filter logic

                    // restaurantObjectF = restaurantObject.filter((resData) => {
                    //     return resData.info.avgRating < 4.5
                    // });
                    // setRestaurantObject(restaurantObjectF)
                    // console.log(restaurantObjectF);
