import React, {useEffect, useState} from 'react';



import AlertTile from "./AlertTile";


export default function AlertsDashGroup(props) {
    let stockdata=[
        {"symbol":"AAPL","alerts":
                [
                    {"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bear","alertMessage":"AAPL Showing a divergence on the 4h"},
                    {"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bear","alertMessage":"AAPL Showing a divergence on the 4h"},
                    {"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bear","alertMessage":"AAPL Showing a divergence on the 4h"},
                    {"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bear","alertMessage":"AAPL Showing a divergence on the 4h"},
                    {"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bull","alertMessage":"AAPL Showing a divergence on the 4h"}
                    ]},
        {"symbol":"AMD","alerts":[{"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bear","alertMessage":"AAPL Showing a divergence on the 4h"},{"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bull","alertMessage":"AAPL Showing a divergence on the 4h"}]},
        {"symbol":"CRM","alerts":[{"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bear","alertMessage":"AAPL Showing a divergence on the 4h"},{"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bull","alertMessage":"AAPL Showing a divergence on the 4h"}]},
        {"symbol":"NVDA","alerts":[{"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bear","alertMessage":"AAPL Showing a divergence on the 4h"},{"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bull","alertMessage":"AAPL Showing a divergence on the 4h"}]},
        {"symbol":"GOOG","alerts":[{"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bear","alertMessage":"AAPL Showing a divergence on the 4h"},{"symbol":"AAPL","alertType":"Divergence","timeFrame":"4H","alertValue":"10","bearBull":"Bull","alertMessage":"AAPL Showing a divergence on the 4h"}]}];
    let stocklist = [];
    for (const [index, value] of props.data['stocks'].entries()) {
        stocklist.push(<AlertTile alerts={value['alerts']} symbol={value['symbol']}/>)
    }

    return (
        <div className="TD-ticker-group ">
            <div className="flex flex-row gap-x-2 flex-wrap">
                <div>
                    <div>
                        <div className="p-1 flex flex-row">
                            <div className="text-md font-inter font-bold text-TDOffWhite">
                                {props.data['watchlist']}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" flex flex-row max-w-6xl">
                        {stocklist}
                    </div>
                </div>
            </div>
        </div>
    );
}