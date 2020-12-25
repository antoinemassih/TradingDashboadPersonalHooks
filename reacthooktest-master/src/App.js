import './App.css';
import Navigation from "./Components/BaseUi/TopNav/Navigation";
import React from "react";
import SubHeader from "./Components/BaseUi/SubNav/SubNav";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TopNavRouter from "./Components/BaseUi/TopNav/TopNavRouter";

function App() {
  return (
      <Router>
      <div className="bg-TDBase h-screen">
<div className="flex flex-col h-full">
    <div className="flex-grow-0">
        <Navigation/>
    </div>
    <TopNavRouter/>
    </div>



</div>


      </Router>








  );
}

export default App;
