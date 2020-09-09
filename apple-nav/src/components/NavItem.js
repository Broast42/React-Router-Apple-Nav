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
    justify-content: space-around;
    align-items: center;
    color: black;
    

`;

const TitleDiv = styled.div`
    margin-bottom: 15px;
`;

export default function NavItem(props){
    console.log("navitem", props)
    return(
        <Items>
            {props.links.map((x,index)=>(
                <NavLink to={x.path} key={index}>
                    <FlexItems >
                        <img src={x.img} alt={x.name} />
                        <TitleDiv>{x.name}</TitleDiv>
                    </FlexItems>
                </NavLink>   
            ))}
            
        </Items>
    );
}

