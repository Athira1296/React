import { IMG_CDN } from "../utils/constants";

const ResCard = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = props.resObj;
    return (
        <div className="res-card m-4 p-4 w-60 rounded-lg border shadow-md hover:bg-slate-200">
            <img className="res-logo rounded-lg" src={IMG_CDN + cloudinaryImageId}></img>
            <h3 className="font-bold py-1">{name}</h3>
            <h4 className="cuisines"><span>{cuisines.join(', ')}</span></h4>
            <h4>{avgRating}</h4>
        </div>
    );
};

export default ResCard;