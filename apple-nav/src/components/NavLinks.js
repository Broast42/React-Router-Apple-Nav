import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks(props){
    console.log("from navlinks", props)
    return(
        <div>
            <NavLink to={`${props.paths}`}>{props.title}</NavLink>
        </div>
    );
}