import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "../../Pages/Home";
import Portfolio from "../../Pages/Portfolio";
import Dashboard from "../../Pages/Dashboard";
import AlertsPage from "../../Pages/AlertsPage";


export default function TopNavRouter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/Dashboard" exact>
                <Dashboard/>
            </Route>
            <Route path="/Portfolio" exact>
                <Portfolio/>
            </Route>
            <Route path="/Alerts" exact>
                <AlertsPage/>
            </Route>


        </Switch>
    );
}