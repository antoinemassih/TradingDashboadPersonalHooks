

import AlertWidgetH from "./Widgets/AlertWidgetH";

import Field from "./Widgets/Field";


export default function TradeGroupSummary(props) {
    // Declare a new state variable, which we'll call "count"

    return (

        <div>

                        <div className="text-left font-bold">
                            <Field value = "total gain">{props.gain}</Field>
                        </div>
                        <div className="text-left font-bold">
                            <Field value = "market value ">{props.mktvalue}</Field>
                        </div>
                        <div className="text-left font-bold">
                            <Field value = "% Port">{props.portfolioPct}</Field>
                        </div>

                    </div>


    );
}