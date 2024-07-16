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

// Higher order components
// input --> ResCard
// output --> ResCard with Promoted label --> ResCardPromoted

export const withPromotedLabel = (ResCard) => {

    return((props) => {
        return(
            <div>
                <label className="absolute bg-black text-white p-1 rounded-md">Promoted</label>
                <ResCard {...props}/>
            </div>
        )
    });
};

export default ResCard;