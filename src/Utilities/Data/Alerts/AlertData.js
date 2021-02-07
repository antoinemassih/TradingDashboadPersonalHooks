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
    console.log(data);
    for(const[value] of data.entries()){
        let isthere = false;
        for(const symbols of newdata.entries()){
            if (symbols === value['symbol']){
            isthere = true;
            }
        if( isthere === false ){
            newdata[value['symbol']]=[];
            newdata[value['symbol']] = value;
            console.log(value['symbol']);

        }else{
            newdata[value['symbol']].push(value);

        }

        }
        console.log(isthere);
    }
return newdata;
}