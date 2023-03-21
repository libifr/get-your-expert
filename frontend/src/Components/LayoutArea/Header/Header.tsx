import "./Header.css";
import React from "react";
import logo from "../../../Assets/Pictures/logo.png"
import {NavLink} from "react-router-dom";
import {Typography} from "@mui/material";
function Header(): JSX.Element {
    return (
        <div className="Header">
            <img src={logo}/>
            <Typography variant="h1" sx={{fontWeight: "700", marginLeft: "50px"}}>
                {/* אמוציולוגיה &nbsp; */}
            </Typography>
            <NavLink to={"/register"}>Register</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/"}>About Us</NavLink>
            <NavLink to={"/home"}>Home</NavLink>
        </div>
    );
}

export default Header;
