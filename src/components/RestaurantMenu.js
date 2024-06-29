import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";

const RestaurantMenu = (props) => {

    const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();
    // console.log(MENU_API + resId);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // console.log(json);
        setresInfo(json);
    }

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