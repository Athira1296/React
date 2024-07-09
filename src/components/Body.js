import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchVal, setSearchVal] = useState('');

    useEffect(
        () => {
            getData();
        },
        []
    );

    const getData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9633121&lng=77.6792237&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(restaurants);
        setFilteredList(restaurants);
    }

    return !resList.length ? 
    (
        <div className="res-cards">
            <Shimmer />
        </div>
    ) : 
    (
        <div className="body">
            <div className="filter">
                <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)}></input>

                <button onClick={() => {
                    const filteredList = resList.filter(res => res?.info?.name.toLowerCase().includes(searchVal.toLowerCase()));
                    setFilteredList(filteredList);
                }}>
                    Search
                </button>

                <button onClick={() => {
                    const filteredList =  resList.filter(res => res?.info?.avgRating > 4);
                    setFilteredList(filteredList);
                }}>
                    Get top restaurents
                </button>

            </div>
            <div className="res-cards">
                { filteredList.map(res => <ResCard resObj={res?.info} key={res.info.id} /> )}
            </div>
        </div>
    );
}

export default Body;