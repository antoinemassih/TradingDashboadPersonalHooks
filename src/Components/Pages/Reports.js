import React, { useState, useEffect } from 'react';
import Table from "../Table/Table";
import Counter from "../Counter";
import TDBox from "../BaseUi/UIStructural/TDBox";
import TradeTile from "../Dashboard/TradeTile";
import TradeTileGroup from "../Dashboard/TradeTileGroup";
import TradeDashboard from "../Dashboard/TradesDashboard";
import BarChart from "../Charts/barchart";
import {fetchTradeHistory} from "../../Utilities/Data/Trades/TradeHistory";
import AlertsDashGroup from "../Dashboard/AlertsDash/AlertsDashGroup";
import Field from "../Dashboard/Widgets/Field";

const datas = [
    [10, 30, 40, 20,10,20,40,90,20,100],
    [10, 40, 30, 20, 50, 10,100],
    [60, 30, 40, 20, 30,100]
]



var i = 0;
export default function Reports() {
    // Declare a new state variable, which we'll call "count"
    const [data, setData] = useState([]);
    const [tradesdata,settradesdata]=useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }



    useEffect(()=>{
        fetchTradeHistory().then(result=> {
            settradesdata(result);
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
                        <BarChart width={600} height={400} data={data} />
                    </div>





            </div>

        </div>

    );
}