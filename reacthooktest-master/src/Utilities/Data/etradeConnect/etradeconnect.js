
import axios from 'axios';
import {etaxiosResultToArray, etgetall} from "../Base/etradeaxios";

export async function fetchTrades(){
    const result = await etgetall();
    return(result);
}
