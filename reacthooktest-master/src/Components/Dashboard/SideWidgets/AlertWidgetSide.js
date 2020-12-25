import React, { useState } from 'react';
import TDBox from "../../BaseUi/UIStructural/TDBox";

export default function AlertWidgetSide() {

    let alerts = [['AAL','near and incident'],['AAL','near and incident'],['AAL','near and incident'],['AAL','near and incident'],['AAL','near and incident']];

    let alertlist = [];
    for (const [index, value] of alerts.entries()) {
    alertlist.push(<div><span>{value[0]}</span><span>{value[1]}</span></div>)
    }

    return (

        <TDBox>
            <h2>Alerts</h2>
                    {alertlist}
        </TDBox>






    );
}