import React, {useEffect, useState} from 'react';

import {fetchTrades, getTradeList} from "../../Utilities/Data/Trades/TradeData";
import TradeTileGroup from "./TradeTileGroup";


export default function TradeDashboard(props) {
    // Declare a new state variable, which we'll call "count"
    const [expanded, setExpanded] = useState(false);
    const [trades,setTrades] = useState({equity:[],shortterm:[],monthly:[],midterm:[]});
    const [summaries,setSummaries] = useState({equity:{totalGain:0,marketValue:0,pctOfPortfolio:0},shortterm:{totalGain:0,marketValue:0,pctOfPortfolio:0},monthly:{totalGain:0,marketValue:0,pctOfPortfolio:0},midterm:{totalGain:0,marketValue:0,pctOfPortfolio:0}});

    useEffect(()=>{
        const intervalId = setInterval(() => {
        fetchTrades().then(result=>{
            const tradesData= getTradeList(result);
            setTrades(tradesData[0]);
            console.log(tradesData);
            setSummaries(tradesData[1]);
        })},5000);
        return ()=> clearInterval(intervalId);
    },[]);


    return (
        <div>
        <TradeTileGroup title="Weekly Options" trades={trades['shortterm']} summary={summaries['shortterm']}/>
    <TradeTileGroup title="Monthly" trades={trades['monthly']} summary={summaries['monthly']}/>
            <TradeTileGroup title="Mid Term Options" trades={trades['midterm']} summary={summaries['midterm']}/>
    <TradeTileGroup title="Equity" trades={trades['equity']} summary={summaries['equity']}/></div>
    );
}