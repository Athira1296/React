import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => { 
    const [btnLabel, setBtnLabel] = useState('Login');

    useEffect(() => {
        console.log("useEffect called")
    },[btnLabel]);

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About us</Link></li>
                <li><Link to={"/contact"}>Contact us</Link></li>
                <li>Cart</li>
                <li><button onClick={() => {
                    btnLabel === 'Login' ? setBtnLabel('Logout') : setBtnLabel('Login');
                }}>{btnLabel}</button></li>
            </ul>
        </div>
    </div>
    )
};

export default Header;