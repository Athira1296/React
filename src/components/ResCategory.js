import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = (props) => {
    const {data, isOpen, setShowIndex} = props;
    //const [isOpen, setIsOpen] = useState(true);
    // ResCategory is a controlled component
    // It does not maitain state of its own
    // Its state is controlled by ResMenu

    const handleClick = () => {
        //setIsOpen(!isOpen) 
        setShowIndex();
    }

    return(
        <div className="m-1 p-4 shadow-lg border">
            <div className="font-bold flex w-full justify-between" onClick={handleClick}>
                <span>{data.title} {'('+ data?.itemCards?.length + ')'}</span> 
                <span>{ isOpen ? '⬆️' : '⬇️'}</span>
            </div>
            {isOpen && <ItemList list={data?.itemCards}></ItemList> }
        </div>
    )

}

export default ResCategory;