import React, { useState, useEffect } from 'react';

import {fetchTradeHistory} from "../../Utilities/Data/Trades/TradeHistory";

import Field from "../Dashboard/Widgets/Field";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import TreeMap from "../Charts/Treemap";
import Sankey from "../Charts/Sankey";
import SankeyChart from "../Charts/Sankey";





export default function Reports() {
    // Declare a new state variable, which we'll call "count"
    const [thedata, setData] = useState([]);
    const[PieData,setPieData] = useState( [{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }, { label: 'pears', value: 20 }, { label: 'something', value: 20 }])
    const [tradesdata,settradesdata]=useState([]);
    const [TreemapData,setTreemap] = useState([{name:"Origin",parent:null,value:null},{name:"position 1",parent:'Origin',value:2},{name:"position 2",parent:'Origin',value:4},{name:"position 3",parent:'Origin',value:2},{name:"position 4",parent:'Origin',value:4}]);
    const[SankeyData,setSankeyData] = useState({"nodes": [{"node": 0, "name": "node0"}, {"node": 1, "name": "node1"},{"node": 2, "name": "node2"},{"node": 3, "name": "node3"}, {"node": 4, "name": "node4"}], "links": [{"source": 0, "target": 2, "value": 2}, {"source": 1, "target": 2, "value": 2}, {"source": 1, "target": 3, "value": 2}, {"source": 0, "target": 4, "value": 2}, {"source": 2, "target": 3, "value": 2}, {"source": 2, "target": 4, "value": 2}, {"source": 3, "target": 4, "value": 4}]});
    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {

    }


    useEffect(()=>{
        fetchTradeHistory().then(result=> {

            setData(result);
        })},[]);


    let tradeslist = [];
    for (const [index, value] of tradesdata.entries()) {
        tradeslist.push(<Field value={value['Symbol']}/>);
    }

    return (
        <div className="flex-grow">

            <div className="flex flex-row h-full p-2">

                    <div className="App">
                        <button onClick={changeData}>Change Data</button>
                        <BarChart data={thedata} xvalue="holdingtime" yvalue="gainloss"/>

                        <SankeyChart data={SankeyData}/>
                    </div>





            </div>

        </div>

    );
}