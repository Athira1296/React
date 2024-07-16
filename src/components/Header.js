import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/context/userContext";

const Header = () => { 
    const [btnLabel, setBtnLabel] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        console.log("useEffect called")
    },[btnLabel]);

    return (
    <div className="flex justify-between shadow-lg mb-2">
        <div className="logo-container">
            <img className="w-20" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4 gap-5">
                <li>{onlineStatus ? '🟢' : '🔴'}</li>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About us</Link></li>
                <li><Link to={"/contact"}>Contact us</Link></li>
                <li><Link to={"/grocery"}>Grocery</Link></li>
                <li><button onClick={() => {
                    btnLabel === 'Login' ? setBtnLabel('Logout') : setBtnLabel('Login');
                }}>{btnLabel}</button></li>
                <li>{loggedInUser}</li>
            </ul>
        </div>
    </div>
    )
};

export default Header;