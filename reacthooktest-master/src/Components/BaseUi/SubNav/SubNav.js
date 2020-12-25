import React, { useState } from 'react';
import {fetchWatchlits} from "../../../Utilities/Data/Watchlist/Watchlist";
import WatchListTab from "./WatchListTab";

export default function SubHeader(props) {
    // Declare a new state variable, which we'll call "count"
    const [title, ToggleTitle] = useState(0);
    let Watchlists = fetchWatchlits();

    return (
        <header className="bg-gray-800 shadow h-auto">
            <div className="flex flex-row space-x-1">

                    <div className=" my-auto px-2 sm:px-6 lg:px-8">
                        <h3 className="text-l font-semibold leading-tight text-gray-100">
                          {props.title[title]}
                         </h3>
                    </div>


                    {Watchlists.map(function(list,id){
                    return(
                        <WatchListTab watchlistname={list}/>
                            )
                    })
                    }
                <div className=" text-center pt-3 ">
                    <button className="hover:bg-green-700 text-green-500 hover:text-gray-300 rounded-t-lg border-2 border-green-500 font-bold py-5 px-5">
                        <div className="h-6 w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        </div>
                    </button>
                </div>

            </div>
        </header>
    );
}

function SwitchTitle(value){

    if (value == 0){
        value = 1;
    }
        else {
        value = 0
    }
        return value;


}

