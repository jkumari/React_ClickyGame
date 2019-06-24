import React from "react";
import whitelogo from "./clickygamewhite.png"
import "./Navbar.css";

// Navbar
const Navbar = props => (

    <div id="navbar" className="container-fluid">

        <span className="navItem" id="navbarLeft">
            <img id="navbarLogo" src={whitelogo} alt="Clicky Game Logo" />
        </span>
        <span className="navItem" id="navbarMiddle">
            <h1 id="guess">Click a flower to begin!</h1>
        </span>
        <span className="navItem" id="navbarRight">
                <p className="score">
                    Top Score: {props.topScore}
                </p>
                <p className="score">
                    Score: {props.score}
                </p>
        </span>

    </div>

)

export default Navbar;