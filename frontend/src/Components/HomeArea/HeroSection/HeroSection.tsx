import "./HeroSection.css";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { TextField } from "@mui/material";



function HeroSection(props:any): JSX.Element {


    return (
        <div className="HeroSection">
            <h1 className="hero-title">Wellcome To Quick Tips</h1>
            <p className="hero-content">Get Your Expert Today.</p>
            <TextField label="Search for expert:"  className="TextBox" onChange={(event)=>props.setSearch(event.target.value)}/>

        </div>
    );

    }

export default HeroSection;
