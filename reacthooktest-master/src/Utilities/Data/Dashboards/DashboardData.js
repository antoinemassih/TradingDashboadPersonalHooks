
import axios from 'axios';
import {axiosResultToArray, tdgetall} from "../Base/tdaxios";

export async function fetchDashboards(){
    const result = await tdgetall("dashboard");
    return(axiosResultToArray(result,"title"));
}

export async function fetchDashboardConfig(dashID){


}

export async function setDashboardConfig(dashID){


}
