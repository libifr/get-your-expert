import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import React, { useState } from "react";
import DictionaryLetters from "../DictionaryLetters/DictionaryLetters";

function Home(): JSX.Element {
    const [search, setSearch] = useState("")
    
    
    return (
        <div className="Home">
			<HeroSection setSearch={setSearch}/>
            <DictionaryLetters  search={search}/>
        </div>
    );
}

export default Home;
