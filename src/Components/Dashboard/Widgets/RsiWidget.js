import React, { useState } from 'react';




export default function RsiWidget() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (


        <div className="flex flex-row ">
            <div className="m-1 px-1 rounded-md border-2 border-red-500 text-sm font-medium text-white bg-gray-900 hover:bg-red-800 hover:text-green-900 focus:outline-none focus:text-white focus:bg-gray-700 ">

                <div className="flex flex-column">
                    <div>
                        <svg height="40" width="25">
                            <g fill="none" stroke="green" stroke-width="6">
                                <path stroke-linecap="round" d="M 10 10 l 0 20" />
                            </g>
                        </svg>
                        <div className="text-xs">
                            5m
                        </div>
                    </div>

                    <div>
                        <svg height="40" width="25">
                            <g fill="none" stroke="green" stroke-width="6">
                                <path stroke-linecap="round" d="M 10 10 l 0 20" />
                            </g>
                        </svg>
                        <div className="text-xs">
                            15m
                        </div>
                    </div>
                    <div>
                        <svg height="40" width="25">
                            <g fill="none" stroke="green" stroke-width="6">
                                <path stroke-linecap="round" d="M 10 10 l 0 20" />
                            </g>
                        </svg>
                        <div className="text-xs">
                            1h
                        </div>
                    </div>
                    <div>
                        <svg height="40" width="25">
                            <g fill="none" stroke="green" stroke-width="6">
                                <path stroke-linecap="round" d="M 10 10 l 0 20" />
                            </g>
                        </svg>
                        <div className="text-xs">
                            4h
                        </div>
                    </div>




                </div>
            </div>


        </div>






    );
}