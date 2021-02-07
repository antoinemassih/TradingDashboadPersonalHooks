import axios from "axios";

//CONFIG

let TradeLambdaURL = "https://m5c616wtc8.execute-api.eu-west-1.amazonaws.com/dev";

//GET FUNCTIONS
export async function ETgettrades(){
    const result = await axios.get(TradeLambdaURL);
    return axiosResultToArray(result);
}

// PUT FUNCTIONS
export async function tdpost(uristring,ID){


}
//DATA TRANSFORM FUNCTIONS
export function axiosResultToArray(result){
    let arr = [];
    for (const [index, value] of result.data.entries()) {
        arr.push(value);
    }
    return(arr);

}


