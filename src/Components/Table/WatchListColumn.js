import React, { useState,useEffect } from 'react';
import fetchStockData from "../../Utilities/Data/Stocks/StockData";

export default function WatchListColumnItem(props) {

    const [data,setData] = useState(props.data)

    useEffect(() => {


    });


    return (
<td className="px-3 py-2 whitespace-no-wrap">
    <div id="" className="flex text-left text-lg leading-5 font-bold uppercase tracking-wider text-gray-300">
        {data}
    </div>
</td>
    );
}

