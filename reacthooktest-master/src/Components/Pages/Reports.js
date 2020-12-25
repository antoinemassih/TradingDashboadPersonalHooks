
import DashTileGroup from "../Dashboard/DashTileGroup";
import TDBox from "../BaseUi/UIStructural/TDBox";
import React, {useEffect, useState} from 'react';
import DashboardMenuItem from "../BaseUi/DashboardNav/DashboardMenuItem";
import {fetchTrades} from "../../Utilities/Data/etradeConnect/etradeconnect";




export default function Reports() {
    // Declare a new state variable, which we'll call "count"
    const [trades,setTrades] = useState([]);
    const list = [];
    useEffect(()=>{

        fetchTrades().then(result=>{
            console.log(result);
            setTrades(result);

        });
    },[]);


    return (
        <div className="flex-grow font-body">

            <div className="flex-grow">

                <div className="flex flex-row h-full p-2">
                    <div className="flex flex-col bg-TDBase rounded-md m-1 border-r border-TDBGBaseLighter">
                        <TDBox>were going to tray</TDBox>
                    </div>

                    <div className="text-TDGreen text-center bg-TDBase px-4 py-2 m-1 flex-grow rounded-md">
                        {trades}
                    </div>

                </div>

            </div>


        </div>

    );
}