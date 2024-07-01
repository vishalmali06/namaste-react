import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {
    const { restData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = restData?.info;

    return (
        <div className='m-4 p-4 w-[280px] h-[380px] rounded-lg bg-gray-100 hover:bg-gray-200'>
            <img
                className='rounded-lg w-[280px] h-[200px] object-cover'
                alt='res-logo'
                src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.slice(0, 2).join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minuts</h4>
        </div>
    );
};

export default RestaurantCard;