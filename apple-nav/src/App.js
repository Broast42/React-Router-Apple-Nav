import React, { useState } from 'react';
import NavWrapper from './components/NavWrapper';
import SubNav from "./components/SubNav";
import Page from "./components/Page"
import data from "./data";
import { Route } from "react-router-dom";
import './App.css';


function App() {
  
  const [linkData] = useState(data);
  
  return (
    <div>
      <NavWrapper data={linkData}/>
      <SubNav data={linkData} />

      <Route exact path="/" 
      render={props => <Page info="Home" />}
      />

      {linkData.map((x,index)=>(
        <Route exact path={x.path} 
        render={props => <Page info={x.title} />}
        key={index}
        />  
      ))}

      {linkData.map((x)=>(
        x.links.map((y, index)=>(
          <Route exact path={y.path} 
          render={props => <Page info={y.name} />}
          key={index}
          /> 
        ))
      ))}

      <Route exact path="/support" 
        render={props => <Page info="Support" />}
      />

      <Route exact path="/search" 
        render={props => <Page info="Search" />}
      />

      <Route exact path="/bag" 
        render={props => <Page info="Bag" />}
      />

    </div>
    
  );
}

export default App;
