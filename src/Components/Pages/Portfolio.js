import React, { useState } from 'react';
import Table from "../Table/Table";
import Counter from "../Counter";
import TDBox from "../BaseUi/UIStructural/TDBox";
import TradeTile from "../Dashboard/TradeTile";
import TradeTileGroup from "../Dashboard/TradeTileGroup";
import TradeDashboard from "../Dashboard/TradesDashboard";


export default function Home() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div className="flex-grow">

            <div className="flex flex-row h-full p-2">




                <div className="text-gray-700 text-center bg-gray-800 px-4 py-2 m-1 flex-grow rounded-md">
                    <TradeDashboard/>
                </div>



            </div>

        </div>

    );
}