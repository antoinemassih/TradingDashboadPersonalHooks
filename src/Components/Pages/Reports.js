import React, { useState, useEffect } from 'react';

import {fetchTradeHistory} from "../../Utilities/Data/Trades/TradeHistory";

import Field from "../Dashboard/Widgets/Field";
import MyBarChart from "../Charts/myBarChart";





export default function Reports() {
    // Declare a new state variable, which we'll call "count"
    const [thedata, setData] = useState([]);
    const [tradesdata,settradesdata]=useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {

    }

    useEffect(()=>{
        fetchTradeHistory().then(result=> {

            setData(result);
        })},[]);


    let tradeslist = [];
    for (const [index, value] of tradesdata.entries()) {
        tradeslist.push(<Field value={value['Symbol']}/>);
    }

    return (
        <div className="flex-grow">

            <div className="flex flex-row h-full p-2">

                    <div className="App">
                        <button onClick={changeData}>Change Data</button>
                        <MyBarChart data={thedata} xvalue="holdingtime" yvalue="gainloss"/>
                    </div>





            </div>

        </div>

    );
}