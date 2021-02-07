import React, { useState } from 'react';




export default function LevelsWidget() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (


        <div className="flex flex-row ">
            <div className="m-1 px-1 rounded-md border-2 border-red-500 text-sm font-medium text-white bg-gray-900 hover:bg-red-800 hover:text-green-900 focus:outline-none focus:text-white focus:bg-gray-700 ">

                <div className="flex flex-row">
                    <div>
                        <svg height="140" width="30">
                            <g fill="none" stroke="white" stroke-width="15">
                                <path stroke-linecap="round" d="M 15 20 l 0 100" />
                            </g>

                            <g fill="none" stroke="green" stroke-width="15">
                                <path stroke-linecap="butt" d="M 15 50 l 0 30" />
                            </g>

                            <g fill="none" stroke="green" stroke-width="15">
                                <path stroke-linecap="butt" d="M 15 30 l 0 5" />
                            </g>

                            <g fill="none" stroke="green" stroke-width="15">
                                <path stroke-linecap="butt" d="M 15 90 l 0 5" />
                            </g>


                        </svg>

                    </div>
                    <div className="p-2">
                        <div className="text-xs">
                            20D MA 120
                        </div>
                        <div className="text-xs">
                            20D MA 120
                        </div>
                        <div className="text-xs">
                            20D MA 120
                        </div>
                        <div className="text-xs">
                            20D MA 120
                        </div>
                        <div className="text-xs">
                            20D MA 120
                        </div>
                        <div className="text-xs">
                            20D MA 120
                        </div>
                    </div>






                </div>
            </div>


        </div>






    );
}