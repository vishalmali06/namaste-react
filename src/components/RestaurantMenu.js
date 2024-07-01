import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = (props) => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    return (

        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <ul>
                {itemCards.map(item => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {" Rs. "} {item?.card?.info?.price / 100}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;