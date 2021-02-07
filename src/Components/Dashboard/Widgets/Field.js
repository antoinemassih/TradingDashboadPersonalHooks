import React, { useState } from 'react';

export default function Field(props) {
    let textcolor = "text-OffWhite";
    if(parseInt(props.children)<0){
        textcolor = "text-TDRed";

    }else{
        textcolor = "text-TDGreen";

    }
    return (

        <div className="py-0.5 flex flex-row ">
            <div className={'mx-1 text-left text-lg '+textcolor}>

                    <div>
                        <div className="text-sm font-inter font-bold text-TDOffWhite">
                            {props.value}
                        </div>
                        <div>
                            {props.children}
                        </div>

                    </div>

                </div>

        </div>

    );
}