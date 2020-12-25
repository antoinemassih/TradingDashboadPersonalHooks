import React, { useState } from 'react';

import AlertWidgetH from "./Widgets/AlertWidgetH";
import RsiWidget from "./Widgets/RsiWidget";
import LevelsWidget from "./Widgets/LevelsWidget";

export default function DashTileExpanded(props) {
    var negative = (false);
    const [expanded, setExpanded] = useState(false);

    if (expanded){
        var chartExpansion = "<div>hello</div>";
    }
    return (
        <div className="px-1 py-1 ">
            <div className="flex flex-row ">
                <div className="px-1 py-1 rounded-md border-2 { negative ? border-red-500 hover:bg-tg-bg-dark : border-green-500 hover:bg-green-400 } text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 ">
                    <div className="flex flex-column">
                        <div>
                    <div className="flex flex-row">
                        <div className=" flex-column">
                            <div className="text-left font-bold">
                                {props.symbol}
                            </div>
                            <div className="text-left font-bold">
                                PRICE
                            </div>
                        </div>
                        <div className="p-1 text-right align-text-top font-bold">
                            CHANGE
                        </div>
                        <div>
                            <button onClick={() => setExpanded((!expanded))}>
                                <div className="flex flex-row">
                                    <div className="h-5 w-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <AlertWidgetH/>
                    </div>
                    <div>
                        <RsiWidget/>
                    </div>
                    <div>
                        <LevelsWidget/>
                    </div>
                </div>
                        {chartExpansion}
                </div>
                </div>
            </div>
        </div>
    );
}