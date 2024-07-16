import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {
    const {id} = useParams();
    const resData = useResMenu(id);
    const [showIndex, setShowIndex] = useState(null);

    useEffect(() => {

        return(() => {
            console.log("Use effect return ResMenu")
        });
    },[]);

    if(!resData.length) return Shimmer();

    // console.log("resData", resData)

    const resName = resData[0]?.card?.card?.text;
    const resDetails = resData[2]?.card?.card?.info?.areaName + ", "+ resData[2]?.card?.card?.info?.city;

    const categories = resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(card => {
        return card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });
    //console.log("categories", categories);

    return(<div>
        <h1 className="font-extrabold text-center text-3xl">{resName}</h1>
        <p className="text-center">{resDetails}</p>
        {/* ResCategory is a controlled component */}
        <div className="flex-col w-7/12 m-auto gap-2">
            {categories.map((category, idx) => 
                <ResCategory key={category?.card?.card.title} 
                             data={category?.card?.card} 
                             isOpen={idx == showIndex ? true : false} 
                             setShowIndex={() => { 
                                idx == showIndex ? setShowIndex(null) : setShowIndex(idx)
                             }} 
                />)}
        </div>
    </div>);
}

export default ResMenu;