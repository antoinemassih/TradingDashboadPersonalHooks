import React, { useState, useEffect } from 'react';

import {fetchTradeHistory} from "../../Utilities/Data/Trades/TradeHistory";

import Field from "../Dashboard/Widgets/Field";
import MyBarChart from "../Charts/myBarChart";
import PieChart from "../Charts/PieChart";





export default function Reports() {
    // Declare a new state variable, which we'll call "count"
    const [thedata, setData] = useState([]);
    const[PieData,setPieData] = useState( [{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }, { label: 'pears', value: 20 }, { label: 'something', value: 20 }])
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
                        <PieChart data = {PieData}/>
                    </div>





            </div>

        </div>

    );
}