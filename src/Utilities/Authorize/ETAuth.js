import {axiosResultToArray} from "../Data/Base/etaxios";
import axios from "axios";

export async function ETAuthorizeCall(){
    let AuthLambda = "https://l9r03jdv6h.execute-api.eu-west-1.amazonaws.com/dev";
    const result = await axios.get(AuthLambda);
    return result.data;
}

export async function ETAuthorizeGetCodes(code){
    let AuthLambda = "";
    const result = await axios.get(AuthLambda);
    return axiosResultToArray(result);
}