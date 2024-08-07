import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = (props) => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setshowIndex] = useState(0);

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (

        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h4 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h4>
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index == showIndex ? true : false}
                    setshowIndex={() => setshowIndex(index)}
                />))
            }

        </div>
    );
};

export default RestaurantMenu;