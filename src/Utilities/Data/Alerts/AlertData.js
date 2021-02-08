import {axiosResultToArray, tdgetall} from "../Base/tdaxios";
import axios from "axios";

let basestring = "https://tickspace.com/alerts/";

export async function fetchAlerts(){
    const result = await getAllAlerts();
    return(result.data);
}

export async function fetchDashboardConfig(dashID){


}

export async function setDashboardConfig(dashID){


}

async function getAllAlerts(){
    const result = await axios.get(basestring);
    return result;
}

export function groupAlertsByStock(data){
let newdata = [];
    for(const[key,value] of data.entries()){
        if(newdata[value['symbol']]!=null){
            newdata[value['symbol']].push(value);
        }else{
            newdata[value['symbol']]=[];
            newdata[value['symbol']].push(value);
            console.log(value['symbol']);

        }

    }
return newdata;
}