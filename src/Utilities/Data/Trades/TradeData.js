

import {ETgettrades} from "../Base/etaxios";

import React from "react";

export async function fetchTrades(){
    const result = await ETgettrades();
    return result;
}

export function getTradeList(result){
    let tradeList = {shortterm:[],monthly:[],midterm:[],equity:[]};
    let tradeSummary = [];
let category="";
let veryShortTerm = false;
    let sizeconditions = {'equity':10000,'midterm':3000,'shortterm':1000,'monthly':2000};


    tradeSummary['shortterm'] = {marketValue:0,pctOfPortfolio:0,totalGain:0};
    tradeSummary['monthly'] = {marketValue:0,pctOfPortfolio:0,totalGain:0};
    tradeSummary['midterm'] = {marketValue:0,pctOfPortfolio:0,totalGain:0};
    tradeSummary['equity'] = {marketValue:0,pctOfPortfolio:0,totalGain:0};

    for (const [index, value] of result.entries()) {
switch(true){
    case(value['Product']['securityType']==="EQ"):
        category = "equity";
        break;

    case(value['Product']['securityType']==="OPTN"):
        let dateOfExpiry = new Date(value['Product']['expiryYear'],(value['Product']['expiryMonth']-1),value['Product']['expiryDay']);
        let currentDate = new Date();
        veryShortTerm=false;
        if (currentDate.getMonth()==dateOfExpiry.getMonth()){
            if( dateOfExpiry.getDate()-currentDate.getDate()<10){
                category='shortterm';
                if(dateOfExpiry.getDate()-currentDate.getDate()<3){
                    veryShortTerm = true;
                }
            }else{
                category='monthly';
            }}
            else{
            category ='midterm';
            }

       break;

}
//This should be converted to an object
const position = [];
        position['symbol'] = value['symbolDescription'];
        position['quantity'] = value['quantity'];
        position['marketValue'] = value['marketValue'];
        position['PL'] = value['totalGain'];
        position['PLpct'] = (Math.round(value['totalGainPct'] * 100) / 100).toFixed(2);
        position['pctOfPortfolio'] =(Math.round(value['pctOfPortfolio'] * 100) / 100).toFixed(2);
        position['size']= Math.round( value['marketValue']/sizeconditions[category]);
        position['sellHalf']=false;
        position['sellMost']=false;

if(position['PL']>100){
    position['sellHalf']=true;
}
        if(position['PLpct']>100){
            position['sellHalf']=true;
        }
        if(position['PLpct']>50&&veryShortTerm){
            position['sellMost']=true;
        }




        tradeList[category].push(position);

        tradeSummary[category]['marketValue'] = tradeSummary[category]['marketValue'] + value['marketValue'];
        tradeSummary[category]['pctOfPortfolio'] = tradeSummary[category]['pctOfPortfolio'] + value['pctOfPortfolio'];
        tradeSummary[category]['totalGain'] = tradeSummary[category]['totalGain'] + value['totalGain'];
    }
return [tradeList,tradeSummary];
}
