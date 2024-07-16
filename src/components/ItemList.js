import { IMG_CDN } from "../utils/constants";

const ItemList = ({list}) => {
    // console.log("list", list);

    return(
        <div> 
            {list.map(item => 
                <div key={item.card?.info?.id} className="m-3 border shadow-md p-3 flex justify-between gap-4">
                    <div>
                        <div className="font-semibold">{item.card?.info?.name}</div>
                        <div>{'₹ ' + (item.card?.info?.defaultPrice/100 || item.card?.info?.price/100)}</div>
                        <div className="text-xs">{item.card?.info?.description}</div>
                    </div>
                    { item.card?.info?.imageId ? 
                        <div>
                            <div className="relative flex-col m-2">
                                <img className="w-[200] border" src={IMG_CDN + item.card?.info?.imageId}></img>
                                <button className="absolute border-2 text-green-600 border-green-600 py-1 px-2 rounded-md bg-white bottom-[-15] left-[15]">Add +</button>
                            </div>
                        </div> : 
                        <div><button className="border-2 text-green-600 border-green-600 py-1 px-2 rounded-md bg-white">Add +</button></div>
                    }
                </div> 
            )}
        </div>
    );
};
export default ItemList;