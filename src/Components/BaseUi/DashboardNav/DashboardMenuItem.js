import React from "react";
import AlertWidgetH from "../../Dashboard/Widgets/AlertWidgetH";

export default function DashboardMenuItem(props){

    return(
        <div className=" text-right pt-1 font-body">
            <button className="bg-TDBGBaseLight hover:bg-TDBGBaseLighter text-TDOffWhite hover:text-gray-300 rounded-l-lg font-bold py-1 px-1">
                {props.name}
                <AlertWidgetH/>
            </button>
        </div>

    )




}
