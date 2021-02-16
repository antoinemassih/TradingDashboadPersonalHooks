import {axiosResultToArray, tdgetall} from "../Base/tdaxios";
import axios from "axios";

let basestring = "http://127.0.0.1:5000/GL/";

export async function fetchTradeHistory(){
    const result = await getAllTradesHistory();
    return(result.data);
}

async function getAllTradesHistory(){
    const result = await axios.get(basestring);
    return result;
}
