import React, { useState } from 'react';

export default function MeterWidgetH(props) {

    let bars = "<div><svg height=\"16\" width=\"58\">";
    let position = 0;
    let colorValue = "grey"
    if(props.meterValue<5){
        colorValue = "green";
    }else{
        colorValue="red"
    }
    for (let i=1;i<11;i++){

        switch (true){
            case (i<props.meterValue):
                position = 2 + (i-1)*6;
                bars+='<g fill="none" stroke="'+colorValue+'" stroke-width="4"><path d="M '+position+' 2 l 0 12"/></g>';
                break;
            case (i===props.meterValue):
                position = 2 + (i-1)*6;
                bars+='<g fill="none" stroke="'+colorValue+'" stroke-width="4"><path d="M '+position+' 0 l 0 16"/></g>';
                break;
            case (i>props.meterValue):
                position = 2 + ( i-1)*6;
                bars+='<g fill="none" stroke="grey" stroke-width="4"><path d="M '+position+' 2 l 0 12"/></g>';
                break;
            default:
        }
    }
bars+="</svg></div>";

    return (


        <div className="flex flex-row ">
            <div className="m-1 rounded-md">

                <div className="flex flex-row">
                    <div className="text-TDRedHighlight text-sm font-medium">
                        {props.fromTitle}
                    </div>
                    <div className="px-1 pt-1">
                        <div dangerouslySetInnerHTML={{__html: bars}}></div>
                    </div>
                    <div className="text-TDGreenHighlight text-sm font-medium">
                        {props.toTitle}
                    </div>

                </div>
            </div>


        </div>






    );
}