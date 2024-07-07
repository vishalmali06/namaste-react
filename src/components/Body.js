import RestaurantCard, { withPramotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([])
    const [searchText, setsearchText] = useState("");

    const RestaurantCardPramoted = withPramotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>

    const { loggedInUser, setuserName } = useContext(UserContext);

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 m-4 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => {
                        const filteredList = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurant(filteredList);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => {
                        const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
                        setfilteredRestaurant(filteredList);
                    }}>Top Rated Restaurant
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>User Name</label>
                    <input className="p-1 border border-black" value={loggedInUser} onChange={(e) => setuserName(e.target.value)} />
                </div>
            </div>
            <div className='flex flex-wrap'>
                {
                    filteredRestaurant.map((restaurant) =>
                        <Link key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}>
                            {
                                restaurant.info.avgRating > 4.5 ? (
                                    <RestaurantCardPramoted restData={restaurant} />
                                ) : (<RestaurantCard restData={restaurant} />)
                            }

                        </Link>)
                }
            </div>
        </div>
    );
};

export default Body;