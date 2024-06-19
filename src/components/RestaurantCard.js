import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {
    const { restData } = props;
    console.log(restData);
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = restData?.info;

    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img className='res-logo' alt='res-logo'
                src={CDN_URL +
                    cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.slice(0, 2).join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minuts</h4>
        </div>
    );
};

export default RestaurantCard;