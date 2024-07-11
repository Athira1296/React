import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResMenu = () => {
    const [resData, setResData] = useState([]);
    const {id} = useParams();

    const getMenu = async () => {
        const res = await fetch(MENU_URL + id); //'336908'
        const json = await res.json();
     
        // console.log("Res Name:", json.data?.cards[0]?.card?.card?.text);
        // console.log("Menu items:", json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        
        setResData(json.data?.cards);
    }

    useEffect(() => {
        getMenu();

        return(() => {
            console.log("Use effect return ResMenu")
        });
    },[]);

    if(!resData.length) return Shimmer();

    const resName = resData[0]?.card?.card?.text;
    const menuList = resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return(<div>
        <h1>Menu - {resName}</h1>
        <ul>
            {
                menuList.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {'Rs.' + (item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100)}</li>)
            }
        </ul>
    </div>);
}

export default ResMenu;