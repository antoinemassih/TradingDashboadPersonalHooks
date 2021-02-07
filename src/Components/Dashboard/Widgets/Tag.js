import React, { useState } from 'react';

export default function Tag(props) {
    let color = "bg-TDBase";

    if (props.color=="green"){

         color = "bg-TDGreen";
    }else
    {
         color = "bg-TDRed";

    }


    return (

        <div className="py-0.5 flex flex-row ">
            <div className={'rounded-md m-1 p-1 text-md '+color}>

                <div>
                    <div className="text-sm font-inter font-bold text-TDBase">
                        {props.text}
                    </div>

                </div>

            </div>

        </div>

    );
}