import { useState, useEffect } from "react";

import { Menu_API_2 } from "./constants";


const useRestaurantMenu = (resId)=>{
  const [restInfo, setRestInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetchData(Menu_API_2 + resId);
        const json = await data.json();
        setRestInfo(json.data); 
    }


    return restInfo;
}

export default useRestaurantMenu;