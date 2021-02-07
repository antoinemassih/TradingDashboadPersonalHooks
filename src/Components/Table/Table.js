import React, { useState } from 'react';

import TableItem from "./TableItem";
import {fetchWatchlist,fetchColumns} from "../../Utilities/Data/Watchlist/Watchlist";

export default function Table() {
    let ItemList = fetchWatchlist();
    let columns = fetchColumns();
    const [List, UpdateList] = useState(ItemList);
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                    <div className="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-x divide-gray-500">
                            <thead className="divide-x divide-gray-500 divide-y">
                            <tr>
                                <th className="px-6 py-3 bg-gray-700 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Symbol
                                </th>
                                {columns.map(function(column,index){
                                return(
                                    <th className="px-6 py-3 bg-gray-700 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        {column}
                                    </th>

                                )
                                })

                                }

                                <th className="px-6 py-3 bg-gray-700"></th>
                            </tr>
                            </thead>
                            <tbody className="divide-x divide-gray-500 divide-y">
                            {List.map((item,index)=>{
                                return <TableItem name={item}/>
                            })}
<tr className="bg-gray-800">
   <td colSpan="8">
    <button onClick={() => UpdateList(List.concat("New Dude"))}>
        <div className="h-6 w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div> <div>Add New Row</div>
    </button>

   </td>
</tr>


                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    );
}