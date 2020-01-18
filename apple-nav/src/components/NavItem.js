import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Items = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const FlexItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;

`; 

export default function NavItem(props){
    console.log("navitem", props)
    return(
        <Items>
            {props.links.map((x,index)=>(
                <NavLink to={x.path} key={index}>
                    <FlexItems >
                        <img src={x.img} alt={x.name} />
                        <p>{x.name}</p>
                    </FlexItems>
                </NavLink>   
            ))}
            
        </Items>
    );
}

