import React, { useState } from 'react';




export default function MeterWidgetH() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (


        <div className="flex flex-row ">
            <div className="m-1 px-1 rounded-md">

                <div className="flex flex-row">
                    <div className="text-TDRedHighlight text-sm font-medium">
                        Sell
                    </div>
                    <div className="px-1 py-1">
                        <svg height="12" width="50">
                            <g fill="none" stroke="green" stroke-width="4">
                                <path stroke-linecap="butt" d="M 2 2 l 0 10" />
                            </g>

                            <g fill="none" stroke="green" stroke-width="4">
                                <path stroke-linecap="butt" d="M 8 2 l 0 10" />
                            </g>

                            <g fill="none" stroke="green" stroke-width="4">
                                <path stroke-linecap="butt" d="M 14 2 l 0 10" />
                            </g>

                            <g fill="none" stroke="green" stroke-width="4">
                                <path stroke-linecap="butt" d="M 20 2 l 0 10" />
                            </g>
                            <g fill="none" stroke="green" stroke-width="4">
                                <path stroke-linecap="butt" d="M 26 2 l 0 10" />
                            </g>
                            <g fill="none" stroke="green" stroke-width="4">
                                <path stroke-linecap="butt" d="M 32 2 l 0 10" />
                            </g>
                            <g fill="none" stroke="green" stroke-width="4">
                                <path stroke-linecap="butt" d="M 38 2 l 0 10" />
                            </g>
                            <g fill="none" stroke="green" stroke-width="4">
                                <path stroke-linecap="butt" d="M 44 2 l 0 10" />
                            </g>




                        </svg>

                    </div>
                    <div className="text-TDGreenHighlight text-sm font-medium">
                        Buy
                    </div>

                </div>
            </div>


        </div>






    );
}