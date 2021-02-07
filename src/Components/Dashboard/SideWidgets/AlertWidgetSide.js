import React, { useState } from 'react';
import TDBox from "../../BaseUi/UIStructural/TDBox";

export default function AlertWidgetSide(props) {
    let textColor = "text-TDGreen";

    let alerts = props.alerts;

    let alertlist = [];
    for (const [index, value] of alerts.entries()) {
        textColor = "text-TDGreen";
        if ( value['bearBull']==="Bear"){
            textColor="text-TDRed"
        }
    alertlist.push(<div className={textColor}><span>{value['alertMessage']}</span><span>{value[1]}</span></div>)
    }

    return (

        <TDBox>
            <h2>Alerts</h2>
                    {alertlist}
        </TDBox>






    );
}