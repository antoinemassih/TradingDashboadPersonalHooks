import React, { useState } from 'react';

import DashTileGroup from "../Dashboard/DashTileGroup";
import AlertWidgetSide from "../Dashboard/SideWidgets/AlertWidgetSide";
import DashboardSideNav from "../BaseUi/DashboardNav/DashboardsSideNav";



export default function Dashboard() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const elements = ['BioTech', 'Big Tech', 'Utilities', 'Big Tech', 'Utilities', 'Big Tech', 'Utilities', 'Big Tech', 'Utilities', 'Big Tech'];

    const lists = []

    for (const [index, value] of elements.entries()) {
        lists.push(<DashTileGroup title={value}/>)
    }

    return (
        <div className="flex-grow font-body">

            <div className="flex-grow">

                <div className="flex flex-row h-full p-2">

                    <div className="flex flex-col bg-TDBase rounded-md m-1">
                        <AlertWidgetSide/>
                        <AlertWidgetSide/>
                        <AlertWidgetSide/>
                        <AlertWidgetSide/>
                    </div>
                    <div className="flex flex-col bg-TDBase rounded-md m-1 border-r border-TDBGBaseLighter">
                       <DashboardSideNav/>
                    </div>



                    <div className="text-TDGreen text-center bg-TDBase px-4 py-2 m-1 flex-grow rounded-md">
                        {lists}
                    </div>

                </div>

            </div>


        </div>

    );
}