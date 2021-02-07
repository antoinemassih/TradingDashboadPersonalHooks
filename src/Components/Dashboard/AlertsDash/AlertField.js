import React, { useState } from 'react';

export default function AlertField(props) {
    let textcolor = "text-OffWhite";
    if((props.bearBull)==='Bear'){
        textcolor = "text-TDRed";

    }else{
        textcolor = "text-TDGreen";

    }
    return (

        <div className="py-0.5">
            <div className={'mx-1 h-5text-left text-lg '+textcolor}>

                    <div  className=" flex flex-row">
                        <div className="text-sm font-inter font-bold">
                            {props.alertType} :
                        </div>
                        <div className="text-sm font-inter font-bold">
                            {props.children}
                        </div>
                    </div>

                </div>

        </div>

    );
}