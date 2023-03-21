import "./Layout.css";
import React from "react";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import Footer from "../Footer/Footer";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <header>
                <Header/>
            </header>

            <main>
                <Routing/>
            </main>

            <footer>
                <Footer/>
            </footer>

        </div>
    );
}

export default Layout;
