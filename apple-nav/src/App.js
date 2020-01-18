import React from 'react';
import NavWrapper from './components/NavWrapper';
import SubNav from "./components/SubNav";
import data from "./data";
import './App.css';

const linkData = data;

function App() {
  return (
    <div>
      <NavWrapper data={linkData}/>
      <SubNav data={linkData} />
    </div>
    
  );
}

export default App;
