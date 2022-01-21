import React from "react";
import { NavLink } from "react-router-dom";

const navNonActiveStyle = {
    display: "inline-block",
    padding: "2px 10px",
    margin: "0 6px 6px",
    //background: "darkgray",
    textDecoration: "none",
    color: "gray",
}

const navActiveStyle = {
    color: "white",
    fontWeight: "500",
    textDecorationLine: "underline"
}

function NavBar() {
    return(
        <div>
            
            <NavLink
                to="/" exact
                style={navNonActiveStyle}
                activeStyle={navActiveStyle}                  
            >
            Home
            </NavLink>

            <NavLink
                to="/goals" 
                style={navNonActiveStyle}
                activeStyle={navActiveStyle} 
            >
            Goals
            </NavLink>

            <NavLink
                to="/log" 
                style={navNonActiveStyle}
                activeStyle={navActiveStyle} 
            >
            Log
            </NavLink>
            
            <NavLink
                to="/track" 
                style={navNonActiveStyle}
                activeStyle={navActiveStyle} 
            >
            Track
            </NavLink>

        </div>
    )
}

export default NavBar;