import React, {useEffect, useState} from 'react';


import fetchStockDataIEX from "../../Utilities/Data/Stocks/StockDataIEX";
import axios from "axios";
import AlertWidgetH from "./Widgets/AlertWidgetH";
import MeterWidgetH from "./Widgets/MeterWidgetH";

export default function DashTile(props) {
    const [price, setPrice] = useState(0);
    var negative = (false);

    /**useEffect(()=>{

        let isMounted = true;
        const intervalId = setInterval(() => {
            async function fetchStockPrice(ticker) {

                let myJson = fetchStockDataIEX(props.symbol);
                return await myJson.data;
            }

            fetchStockPrice(props.symbol).then(result => setPrice(result));
        },5000);
        return () => {
            clearInterval(intervalId); //This is important
            isMounted = false // Let's us know the component is no longer mounted.
        }
    },[]);**/

    return (


                <div className="tracking-tight m-1 py-2 px-1 rounded-lg text-md font-inter font-bold text-TDOffWhite bg-TDBase">
                    <div className="flex flex-row">
                        <div>
                            <div className="text-left text-lg text-TDOffWhite">
                                {props.symbol}
                            </div>
                            <AlertWidgetH/>
                        </div>
                        <div>
                            <div className="text-left text-TDGreenHighlight">
                               124.00
                            </div>
                            <div className="text-right text-TDGreenHighlight">
                                +120%
                            </div>
                        </div>

                    </div>
                    <div>
                        <MeterWidgetH/>
                    </div>

                </div>








    );
}

function getPrice(ticker){
    return fetchStockDataIEX(ticker);

}