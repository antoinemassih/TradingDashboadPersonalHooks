import React from "react";
import AlertWidgetH from "../../Dashboard/Widgets/AlertWidgetH";

export default function WatchListTab(props){
    return(
            <div className=" text-center bg-gray-800 pt-3 ">
                <button className="hover:bg-green-700 text-green-500 hover:text-gray-300 rounded-t-lg border-2 border-green-500 font-bold py-1 px-1">{props.watchlistname}
                <AlertWidgetH/>
                </button>
            </div>

        )




}

