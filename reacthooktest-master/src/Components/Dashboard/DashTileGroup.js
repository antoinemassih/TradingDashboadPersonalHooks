import React, { useState } from 'react';

import Counter from "../Counter";
import DashTile from "./DashTile";
import AlertWidgetH from "./Widgets/AlertWidgetH";
import DashTileExpanded from "./DashTileExpanded";
import {fetchWatchlist} from "../../Utilities/Data/Watchlist/Watchlist";
import IconSmall from "../BaseUi/UIStructural/icon/IconSmall";

export default function DashTileGroup(props) {
    // Declare a new state variable, which we'll call "count"
    const [expanded, setExpanded] = useState(false);

    const elements = fetchWatchlist();

    const stocks = []
    if (expanded) {
            for (const [index, value] of elements.entries()) {
                stocks.push(<DashTileExpanded symbol={value}/>)
            }
            } else {
                for (const [index, value] of elements.entries()) {
                    stocks.push(<DashTile symbol={value}/>)
                }
    }

    return (
                <div className="TD-ticker-group">
                    <div className="flex flex-row gap-x-2">
                        <div>
                            <div><div className="p-1 flex flex-row">
                                <button onClick={() => setExpanded((!expanded))}>
                                    <IconSmall/>
                                </button>
                                <div className="text-sm font-inter font-bold text-TDOffWhite">
                                    {props.title}
                                </div>
                            </div>


                                    <div className="text-left font-bold">
                                        +5%
                                    </div>
                                <div className="text-left font-bold">
                                    <AlertWidgetH/>
                                </div>
                                </div>

                        </div>
                        <div>
                        <div className=" flex flex-row">
                            {stocks}
                        </div>
                    </div>
                    </div>
                </div>
    );
}