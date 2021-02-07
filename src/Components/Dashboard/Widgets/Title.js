import React, { useState } from 'react';

export default function Title(props) {
    return (
        <div className="py-0.5 flex flex-row ">
            <div className="mx-1 text-left text-xl text-TDOffWhite">
                <div className="flex flex-column gap-2">
                    <div>
                        {props.value}
                    </div>
                </div>
            </div>
        </div>
    );
}