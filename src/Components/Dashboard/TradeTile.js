import React, {useEffect, useState} from 'react';


import fetchStockDataIEX from "../../Utilities/Data/Stocks/StockDataIEX";
import axios from "axios";
import AlertWidgetH from "./Widgets/AlertWidgetH";
import MeterWidgetH from "./Widgets/MeterWidgetH";
import Field from "./Widgets/Field";
import Tag from "./Widgets/Tag";
import Title from "./Widgets/Title";

export default function TradeTile(props) {
    const [price, setPrice] = useState(0);
    var negative = (false);
    var tilecolor = "bg-TDBase";
    var bordercolor = ""
    const tags = [];
    if(props.sellhalf){
        tags.push(<Tag color="green" text="sell Half"></Tag>);
    }
    if(props.sellmost){
        tags.push(<Tag color="green" text="sell Most"></Tag>);
    }

if (props.size>=8){
    bordercolor=" border-2 border-TDRed";
}



    return (

        <div className={'tracking-tight m-1 py-2 px-1 rounded-lg text-md font-inter font-bold text-TDOffWhite '+tilecolor+bordercolor}>
            <div className="flex flex-row">
                <div>
                    <div className="mx-1 text-left text-sm text-TDOffWhite">
                        {props.symbol}
                    </div>

                    <div className="flex flex-column gap-2">
                        <Field value ="PL:">{props.PL}</Field>
                        <Field value ="PL%:">{props.PLpct}</Field>
                    </div>
                    <div className="flex flex-column gap-2">
                    <Field value ="Size:">{props.quantity}</Field>
                    <Field value ="Value:">{props.marketValue}</Field>
                    </div>

                <div className="flex flex-column gap-2">
                        <Field value ="Expiry"/>
                        <Field value ="Term:"/>
                </div>


                </div>
            </div>
            <div>
                <MeterWidgetH fromTitle="Size" toTitle="" meterValue={props.size}/>
            </div>
            <div>
                <MeterWidgetH fromTitle="Risk" toTitle="" meterValue={props.size}/>
            </div>
            <div className="flex flex-column gap-1 flex-wrap">
                {tags}
            </div>



        </div>








    );
}

function getPrice(ticker){
    return fetchStockDataIEX(ticker);

}