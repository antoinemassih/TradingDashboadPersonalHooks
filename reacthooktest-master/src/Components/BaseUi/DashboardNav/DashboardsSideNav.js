import React, {useEffect, useState} from "react";
import DashboardMenuItem from "./DashboardMenuItem";
import {fetchDashboards} from "../../../Utilities/Data/Dashboards/DashboardData";

export default function DashboardSideNav(props){
    const [dashboards,setDashboards] = useState(["Main"]);
    const menu = [];
    useEffect(()=>{

        fetchDashboards().then(result=>{
            setDashboards(result);
        });
        },[]);


    for (const [index, value] of dashboards.entries()) {
        menu.push(<DashboardMenuItem name={value}/>)
    }
    return(
        <div>
            {menu}
        </div>
    )
}
