import {CDN_URL} from "../UtilityFiles/constants";

const stylecard = {
  backgroundColor: "#f0f0f0",
}

const RestaurantCard = (props) => {
    //  console.log(props?.info?.name) ;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime,availability } = props.resData.info;
    // const {name2, email} = props.user
    // console.log(props.user.name2, props.user.email)
    return (
      <div className="w-80 h-[300px] p-2 grid grid-cols-1 justify-center items-center" > {/*// inline style added here*/}
        <div className="w-64 left-3">
          <img className="w-full h-40 rounded-3xl" alt="food image" src={ CDN_URL+ cloudinaryImageId} />
        </div>
        <div className="pl-4 pt-2 h-32">
          <h5 className="font-bold ">{name}</h5>
          <div className="flex mt-1 items-center h-auto">
            <div className="w-5"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg></div>
            <div className="w-5">{avgRating}</div>
          </div>
          <p className="text-gray-400 font-normal  overflow-hidden">{cuisines.join(", ")}</p>
          {/* <p>{costForTwo}</p>
          <p>delivery time {deliveryTime} minutes estimated</p> */}
        </div>
          {/* <p>{name2}</p> */}
          {/* <span>{props.user.name2}, {props.user.email}</span> */}
      </div>
    )
  
  
  }

  export default RestaurantCard;

  // we didi props drilling here sending props from applayout to here in this component