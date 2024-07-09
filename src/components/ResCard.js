import { IMG_CDN } from "../utils/constants";

const ResCard = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = props.resObj;
    return (
        <div className="res-card" style={{
                backgroundColor: 'lightgrey'
        }}>
            <img className="res-logo" src={IMG_CDN + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4 className="cuisines"><span>{cuisines.join(', ')}</span></h4>
            <h4>{avgRating}</h4>
        </div>
    );
};

export default ResCard;