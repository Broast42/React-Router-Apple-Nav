import React from "react";
import styled from "styled-components";

const Items = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const FlexItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`; 

export default function NavItem(props){
    console.log("navitem", props)
    return(
        <Items>
            {props.links.map((x,index)=>(
                <FlexItems key={index}>
                    <img src={x.img} alt={x.name} />
                    <p>{x.name}</p>
                </FlexItems>
                
            ))}
            
        </Items>
    );
}

