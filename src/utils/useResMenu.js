import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useResMenu = (resId) => {
    const [resData, setResData] = useState([]);

    useEffect(() => {
       getData()
    },[]);

    const getData = async () => {
        const res = await fetch(MENU_URL + resId);
        const json = await res.json();
        setResData(json.data?.cards);
    }

    return resData;

}

export default useResMenu;