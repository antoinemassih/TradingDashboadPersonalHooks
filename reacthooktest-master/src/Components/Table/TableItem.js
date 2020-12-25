import React, { useState,useEffect } from 'react';
import fetchStockData from "../../Utilities/Data/Stocks/StockData";
import WatchListColumnItem from "./WatchListColumn";

export default function TableItem(props) {

    const [EditMode, setEditMode] = useState(false);
    const [rowData,UpdateRowData] = useState(fetchStockData(props.name));

    useEffect(() => {
        if(document.getElementById("symbolInput")) {
            var inputText = document.getElementById("symbolInput");
            inputText.addEventListener("keyup", function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    if(inputText.value){
                        if(inputText.value!==rowData["Symbol"]){
                            rowData["price"] += 1;
                        }
                        rowData["Symbol"] = inputText.value
                    }
                    UpdateRowData(rowData);
                    setEditMode(false);
                }
            });
        }

    });




    return (
        <tr className ={(EditMode ? "bg-blue-800" : "bg-gray-800")}>
            <td className={"px-3 py-2 whitespace-no-wrap"}>
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-8 w-8 rounded-full"
                             src="https://logo.clearbit.com/spotify.com?size=80&greyscale=true"
                             alt=""/>
                    </div>
                    <div className="ml-4">
                        <div className="text-lg leading-5 uppercase tracking-wider font-bold text-gray-300">
                            {EditMode? <input className="font-bold uppercase tracking-wider text-gray-600" id="symbolInput" placeholder={rowData['Symbol']}/> : <span onClick={() => setEditMode((true))}>{rowData['Symbol']}</span> }
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-3 py-2 whitespace-no-wrap">
                <div className="flex text-left text-lg leading-5 font-bold uppercase tracking-wider text-gray-300">
                <div>
                    {rowData['price']}

                </div>
                <div className="h-5 w-5 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg></div></div>

            </td>
            <WatchListColumnItem data={rowData['open']}/>
            <WatchListColumnItem data={rowData['close']}/>
            <WatchListColumnItem data="Regional Paradigm"/>

            <td className="px-3 py-2 ">
                <span
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
                  Active
                </span>
                <span
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800">
                  Runner
                </span>
                <span
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-200 text-green-800">
                  Imbalanced
                </span>
            </td>
            <td className="px-3 py-2 whitespace-no-wrap text-sm leading-5 text-gray-600">
                {EditMode? <input class=" mt-1 relative rounded-md shadow-sm form-input sm:text-sm " placeholder="Admin"/> : "Admin"}
            </td>
            <td className="px-3 py-2 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                 <button onClick={() => setEditMode(true)}>
                    Edit
                </button>
                {EditMode? <span><button onClick={() => setEditMode((false))}>
                    save
                </button></span>: ""}
            </td>
        </tr>


    );
}

function setSymboltoEdit(){


}