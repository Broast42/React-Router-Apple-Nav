import React from "react";
import { Route } from "react-router-dom";

export default function SubNav(){
    return(
        <div>
            <Route path="/sub-nav/" component={SubNav}/>
        </div>
    );
}