import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const onlineStatus = useOnlineStatus();

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

    if(!onlineStatus) return(
        <div><h2>No network connection.</h2></div>
    );

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
                { filteredList.map(res => <Link key={res.info.id} to={"restaurent/" + res.info.id}>
                    <ResCard resObj={res?.info} />
                </Link> )}
            </div>
        </div>
    );
}

export default Body;