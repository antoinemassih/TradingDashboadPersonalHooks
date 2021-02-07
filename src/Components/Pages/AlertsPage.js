import React, {useEffect, useState} from 'react';

import TradeTileGroup from "../Dashboard/TradeTileGroup";
import AlertWidgetSide from "../Dashboard/SideWidgets/AlertWidgetSide";
import DashboardSideNav from "../BaseUi/DashboardNav/DashboardsSideNav";
import AlertsDashGroup from "../Dashboard/AlertsDash/AlertsDashGroup";
import {fetchTrades, getTradeList} from "../../Utilities/Data/Trades/TradeData";
import {fetchAlerts, groupAlertsByStock} from "../../Utilities/Data/Alerts/AlertData";

export default function AlertsPage() {



    const [alerts, setAlerts] = useState([]);
    const [alertsByGroup,setAlertsByGroup] = useState([]);

     let groupLists = ([
         {'watchlist':'social media','stocks':[{'symbol':'AAPL','alerts':[]},{'symbol':'GOOG','alerts':[]}]},
         {'watchlist':'social media','stocks':[{'symbol':'TWTR','alerts':[]},{'symbol':'AMD','alerts':[]}]},
         {'watchlist':'social media','stocks':[{'symbol':'CRM','alerts':[]},{'symbol':'NVDA','alerts':[]}]}]);

let lists = [];
    useEffect(()=>{
            fetchAlerts().then(result=>{
                setAlerts(result);
                setAlertsByGroup(groupAlertsByStock(result));
            })},5000);

    for (const [index, value] of groupLists.entries()) {
        for (const [index2,stock] of value['stocks'].entries()){
            if(alertsByGroup[stock['symbol']]!=null) {
                groupLists[index]['stocks'][index2]['alerts'] = alertsByGroup[stock['symbol']];
            }
        }
        console.log(alertsByGroup);
        lists.push(<AlertsDashGroup data={groupLists[index]}/>)
    }
    return (
        <div className="flex-grow font-body">

            <div className="flex-grow">

                <div className="flex flex-row h-full p-2">

                    <div className="flex flex-col bg-TDBase rounded-md m-1">

                    </div>
                    <div className="flex flex-col bg-TDBase rounded-md m-1 border-r border-TDBGBaseLighter">
                       <AlertWidgetSide alerts={alerts}/>
                    </div>
                    <div className="text-TDGreen text-center bg-TDBase px-4 py-2 m-1 flex-grow rounded-md">
                        {lists}
                    </div>

                </div>

            </div>


        </div>

    );
}