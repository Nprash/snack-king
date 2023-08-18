import {CDN_URL} from "../UtilityFiles/constants";

const stylecard = {
  backgroundColor: "#f0f0f0",
}

const RestaurantCard = (props) => {
    //  console.log(props?.info?.name) ;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime,availability } = props.resData.info;
  
    return (
      <div className="res-card" style={stylecard}> {/*// inline style added here*/}
        <div className="res-img-holder">
          <img className="res-img" alt="samosa" src={ CDN_URL+ cloudinaryImageId} />
        </div>
        <div className="text-info">
          <h5>{name}</h5>
          <p className="cuisines">cuisines: {cuisines.join(",")}</p>
          <p>ratings: {avgRating}⭐</p>
          <p>{costForTwo}</p>
          <p>delivery time {deliveryTime} minutes estimated</p>
        </div>
  
      </div>
    )
  
  
  }

  export default RestaurantCard;