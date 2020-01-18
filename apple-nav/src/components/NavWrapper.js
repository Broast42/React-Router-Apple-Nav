import React from "react";
import NavLinks from "./NavLinks"
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
    background: #404040;
    min-height: 40px;
    color: #cccccc; 
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export default function NavWrapper(props){

    console.log(props);
    return(
        <NavBar>
            <NavLink to="/"><img src="https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/apple/image_large.svg" alt="apple"/></NavLink>
            {props.data.map(x => (
                <NavLinks title={x.title} paths={x.path} links={x.links}/>
            ))}
            
            <NavLinks />
        </NavBar>
    );
}