import "./Routing.css";
import React from "react";
import {Route, Routes } from "react-router-dom";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import Home from "../../HomeArea/Home/Home";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>

            {/*    ------ Auth Routes -----        */}
            {/* Register Page */}
            <Route path="/register" element={<Register/>}/>

            {/* Login Page */}
            <Route path="/login" element={<Login/>}/>

            {/* Logout */}
            <Route path="/logout" element=""/>

            {/*    ------ Home Routes -----        */}
            <Route path="/home" element={<Home/>}/>

            </Routes>
        </div>
    );
}

export default Routing;
