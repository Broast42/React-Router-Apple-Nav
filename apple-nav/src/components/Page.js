import React from "react";
import styled from "styled-components";

const PageH1 = styled.h1`
    text-align: center;
    font-size: 4rem;
`;


export default function Page(props){
    
    return(
        <PageH1>
            {props.info}
        </PageH1>
    );
}