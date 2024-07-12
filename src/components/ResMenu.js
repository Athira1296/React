import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
    const {id} = useParams();
    const resData = useResMenu(id);

    useEffect(() => {

        return(() => {
            console.log("Use effect return ResMenu")
        });
    },[]);

    if(!resData.length) return Shimmer();

    const resName = resData[0]?.card?.card?.text;
    const menuList = resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return(<div>
        <h1>Menu - {resName}</h1>
        <ul>{
            menuList.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {'Rs.' + (item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100)}</li>)
        }</ul>
    </div>);
}

export default ResMenu;