import React from "react";
import "./Header.css";
import flower from "./flower.png";

// Header
const Header = props => (

    <div id="header" className="container-fluid">

        <span className="headerSection" id="headerLeft">
            <img id="flower" src={flower} alt="fortnite flower" />
        </span>

        <span className="headerSection" id="headerMiddle">
            <h4 id="instructions">Click on an image to earn points, but if you click an image more than once, you lose!</h4>
        </span>

        <span className="headerSection" id="headerRight">
            <img id="flower2" src={flower} alt="fortnite flower" />
        </span>

    </div>

)

export default Header;