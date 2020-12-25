import React, { useState } from 'react';
import Table from "../Table/Table";
import Counter from "../Counter";


export default function Home() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div className="flex-grow">

            <div className="flex flex-row h-full p-2">

                <div className="flex flex-col bg-gray-800 rounded-md m-1">
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-1 rounded-md">Item</div>
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-1 rounded-md">Item</div>
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-1 rounded-md">Item</div>
                </div>


                <div className="text-gray-700 text-center bg-gray-800 px-4 py-2 m-1 flex-grow rounded-md">
                    <h1><div className="btn-blue">ths is an extracterd component</div></h1>
                </div>

                <div className="flex flex-col bg-gray-800 rounded-md m-1">
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-1 rounded-md">Item </div>
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-1 rounded-md">Item</div>
                    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-1 rounded-md">Item</div>
                </div>

            </div>

        </div>

    );
}