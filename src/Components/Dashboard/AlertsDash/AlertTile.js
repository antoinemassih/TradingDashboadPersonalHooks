import React, {useEffect, useState} from 'react';


//import fetchStockDataIEX from "../../Utilities/Data/Stocks/StockDataIEX";
import axios from "axios";
//import AlertWidgetH from "./Widgets/AlertWidgetH";
//import MeterWidgetH from "./Widgets/MeterWidgetH";


import Field from "../Widgets/Field";
import Tag from "../Widgets/Tag";
import AlertField from "./AlertField";

export default function AlertTile(props) {
    const [price, setPrice] = useState(0);
    var negative = (false);
    var tilecolor = "bg-TDBase";
    var bordercolor = ""
    const tags = [];
    let alerts = props.alerts;
    let alertlist = [];
    for (const [index, value] of alerts.entries()) {
        alertlist.push(<div className="flex flex-column gap-2"><AlertField alertType = {value['alertType']} bearBull = {value['bearBull']}>{value['timeFrame']}</AlertField></div>)
    }

    return (
<div className="">
        <div className={'tracking-tight m-1 py-2 px-1 rounded-lg text-md font-inter font-bold text-TDOffWhite '+tilecolor+bordercolor}>
            <div>

                    <div className="mx-1 text-left text-sm text-TDOffWhite">
                        {props.symbol}
                    </div>
                    <div className="flex flex-wrap">
                        {alertlist}
                    </div>


                </div>


            </div>
        </div>


    );
}
