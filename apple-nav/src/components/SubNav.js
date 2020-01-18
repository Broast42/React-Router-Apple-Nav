import React from "react";
import NavItem from "./NavItem";
import styled from "styled-components";
import { Route } from "react-router-dom";

const NavArea = styled.div`
    background: #999999;
`;

export default function SubNav(props){
    return(
        <NavArea>
            {props.data.map((x,index)=>(
                <Route path={`${x.path}`} key={index}
                render={props => <NavItem links={x.links} />}
                />
            

            ))}
            
        </NavArea>
    );
}