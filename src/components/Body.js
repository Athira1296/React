import { useContext, useEffect, useState } from "react";
import ResCard, {withPromotedLabel} from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/context/userContext";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const onlineStatus = useOnlineStatus();
    const ResCardPromoted = withPromotedLabel(ResCard);
    const {loggedInUser, setUserName} = useContext(UserContext);

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
            <div className="filter flex gap-5 m-3">
                <input className="border border-solid border-black m-1 rounded-sm p-1" value={searchVal} onChange={(e) => setSearchVal(e.target.value)}></input>

                <button className="px-7 py-2 bg-green-400 rounded-lg" onClick={() => {
                    const filteredList = resList.filter(res => res?.info?.name.toLowerCase().includes(searchVal.toLowerCase()));
                    setFilteredList(filteredList);
                }}>
                    Search
                </button>

                <button className="px-7 py-2 bg-yellow-400 rounded-lg" onClick={() => {
                    const filteredList =  resList.filter(res => res?.info?.avgRating > 4);
                    setFilteredList(filteredList);
                }}>
                    Get top restaurents
                </button>

                <input className="border border-solid border-black m-1 rounded-sm p-1" 
                    value={loggedInUser}
                    onChange={(e) => {setUserName(e.target.value)}}></input>

            </div>
            <div className="res-cards flex flex-wrap">
                { filteredList.map(res => <Link key={res.info.id} to={"restaurent/" + res.info.id}>
                     { res?.info.avgRating > 4.3 ? <ResCardPromoted resObj={res?.info} /> :  <ResCard resObj={res?.info} />}
                </Link> )}
            </div>
        </div>
    );
}

export default Body;