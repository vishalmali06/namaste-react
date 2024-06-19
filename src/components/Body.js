import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    // lLocal State Variable - Super powerful variable 
    const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

    // Normal JS Variable 

    return (
        <div className='body'>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
                    setlistOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} restData={restaurant} />)
                }
            </div>
        </div>
    );
};

export default Body;