import React, {useEffect, useState} from 'react';


import TradeTile from "./TradeTile";
import AlertWidgetH from "./Widgets/AlertWidgetH";

import {fetchWatchlist} from "../../Utilities/Data/Watchlist/Watchlist";
import IconSmall from "../BaseUi/UIStructural/icon/IconSmall";
import {fetchTrades, getTradeList} from "../../Utilities/Data/Trades/TradeData";
import Field from "./Widgets/Field";
import TradeGroupSummary from "./TradeGroupSummary";


export default function TradeTileGroup(props) {

    const stocks = [];
    const tradeName = "";
    let trades = props.trades;
    let summary = props.summary;

    for (const [index, value] of trades.entries()) {
                stocks.push(<TradeTile size = {value['size']} marketValue={value['marketValue']} symbol={value['symbol']} quantity={value['quantity']} PL={value['PL']} sellmost={value['sellMost']} sellhalf={value['sellHalf']} PLpct={value['PLpct']}/>)
            }

    return (
                <div className="TD-ticker-group ">
                    <div className="flex flex-row gap-x-2 flex-wrap">
                        <div>
                            <div>
                                <div className="p-1 flex flex-row">
                                    <div className="text-md font-inter font-bold text-TDOffWhite">
                                        {props.title}
                                    </div>
                                </div>
                                <TradeGroupSummary gain={summary['totalGain']} mktvalue={summary['marketValue']} portfolioPct={summary['pctOfPortfolio']}/>
                            </div>

                        </div>
                        <div>
                        <div className=" flex flex-row max-w-6xl">
                            {stocks}
                        </div>
                    </div>
                    </div>
                </div>
    );
}