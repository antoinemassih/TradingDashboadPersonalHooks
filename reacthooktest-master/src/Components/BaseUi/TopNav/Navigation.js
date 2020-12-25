import React, { useState } from 'react';
import {Link} from "react-router-dom";
import NavRouterButton from "./NavButtonRouter";


export default function Navigation() {


    return (
        <nav className="bg-TDBase border-b border-TDBGBaseLighter">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">

                           <span className="text-xl font-inter font-bold">
                               <span className="text-TDGreenHighlight">tick</span><span className="text-TDRedHighlight">dash</span>
                           </span>

                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <nav>
                                <NavRouterButton link="/" title="Home"/>
                                    <NavRouterButton link="/Dashboard" title="Dashboards"/>
                                    <NavRouterButton link="/Portfolio" title="Portfolio"/>
                                    <NavRouterButton link="/" title="Strategy"/>
                                    <NavRouterButton link="/Reports" title="Reports"/>
                                    <NavRouterButton link="/" title="Marketplace"/>
                                    <NavRouterButton link="/" title="Community"/>
                                </nav>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



        </nav>
    );
}