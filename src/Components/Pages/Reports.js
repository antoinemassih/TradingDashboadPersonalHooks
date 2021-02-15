import React, { useState, useEffect } from 'react';
import Table from "../Table/Table";
import Counter from "../Counter";
import TDBox from "../BaseUi/UIStructural/TDBox";
import TradeTile from "../Dashboard/TradeTile";
import TradeTileGroup from "../Dashboard/TradeTileGroup";
import TradeDashboard from "../Dashboard/TradesDashboard";
import BarChart from "../Charts/barchart";

const datas = [
    [10, 30, 40, 20,10,20,40,90,20,100],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30]
]
var i = 0;
export default function Reports() {
    // Declare a new state variable, which we'll call "count"
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }

    return (
        <div className="flex-grow">

            <div className="flex flex-row h-full p-2">




                <div className="text-gray-700 text-center bg-gray-800 px-4 py-2 m-1 flex-grow rounded-md">
                    <div className="App">
                        <h2>Graphs with React</h2>
                        <button onClick={changeData}>Change Data</button>
                        <BarChart width={600} height={400} data={data} />
                    </div>
                </div>



            </div>

        </div>

    );
}