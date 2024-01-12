import RestaurantCard from "./RestaurantCard";
import { restaurantObj } from "../UtilityFiles/mockDataAPI"
import React from "react";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link } from "react-router-dom";
import useOnlineStatus from "../UtilityFiles/useOnlineStatus";
import Usercontext from "../UtilityFiles/Usercontext";


const Body = () => {
    // whenever state variable update, react triggers a reconciliation cycle(re-renders the component) 
    const [fixedRestaurantObject, setFixedRestaurantObject] = useState();

    const [ListOfRestaurants, setListOfRestaurants] = useState();

    const [searchtext, setSearchtext] = useState();
    const {user, setUser} = useContext(Usercontext);


    function searchRest(value, list) {
        let filteredList = list.filter((resData) => {
            console.log(resData.info.name);
            return resData.info.name.toLowerCase().includes(value.toLowerCase())
        });
        // return restaurantObjectF
        setListOfRestaurants(filteredList);
    }
    //if no dependency Arry => useEffect is called on every render of its component
    //if dependency array is empty = []   =>  useEffect is called on initial render(at once),, after component re-render useEffect is not called again and again
    //if dependency array is[btnnName] = > useEffect is called everytime when btnName is updated 
    useEffect(() => {
        fetchData();
        // console.log("re rendering ");

    },[]);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4254486&lng=78.450544")
        const json = await data.json()
        console.log(json)

        setFixedRestaurantObject(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // to store listofrestaurants inititally
        console.log(fixedRestaurantObject)
        // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        // above line indicates to get data from API but its not a good way to fetch data

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(ListOfRestaurants)

        //use optional chaining:---
        // setListOfRestaurants(json?.data?.cards[2]?.data?.cards)

        //now i can't read the data due to unstructered data found in API
        // console.log(ListOfRestaurants);
    };

    // console.log(fixedRestaurantObject);
    // console.log(ListOfRestaurants)



    // if (navigator.onLine) {
    //     console.log("online");
    //   } else {
    //     console.log("offline");
    //   }

    // this is conditional rendering
    const onlineStatus = useOnlineStatus();
    if(onlineStatus ===false) return <h1>you are offline, plz check your internet connection</h1>

    // <span>onlineStatus? <span className="green-color">"gree"</span>:<span classname="red-color">"red"</span></span>

    if (ListOfRestaurants == undefined) {
        let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

        return (
            <div className="dflex">
                {
                    count.map((k) => {
                        return <Shimmer key={k}/>
                    })
                }
            </div>
        )
    }

    // we can add this directly into below return with terinary operator 

    // ListOfRestaurants.leangth===0 ? <Shimmer /> :     below will be returned
    return ListOfRestaurants == undefined ? null : (
        <div className="body  w-full bg-slate-100 p-2">
            <div className="w-full my-4  flex justify-center">
                <input className="w-60 mr-3 px-3 py-1 border rounded-full outline-none font-sans font-medium border-spacing-2" type="text" placeholder="Search Something Delicious" value={searchtext} onChange={(e) => {
                    setSearchtext(e.target.value)
                    searchRest(e.target.value, fixedRestaurantObject)
                }} />
                <button className="w-30 px-4 ml-3 bg-green-200 rounded-full font-sans font-medium" onClick={() => {


                    setListOfRestaurants(ListOfRestaurants);
                    // console.log(setRestaurantObject);
                }}>Search</button>
                
                <input type="text" value={user.name} onChange={e => setUser({name:e.target.value, email:"newemail@gmail.com"})}/>
                {/* <span>{onlineStatus? "🟢" : "🔴"}</span> */}
            </div>
            <div className="flex items-center justify-center flex-wrap p-3 ">

                {//its an optional chaining "?"
                    ListOfRestaurants?.map((Mrestaurant) => {
                        return <Link className="bodycard" key={Mrestaurant.info.id} to={"/Restaurants/"+Mrestaurant.info.id}><RestaurantCard resData={Mrestaurant} user={user}/></Link>
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
