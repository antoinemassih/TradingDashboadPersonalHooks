import axios from "axios";

//CONFIG

let basestring = "http://data.tickdash.io/";

//GET FUNCTIONS
export async function tdgetall(uristring){
    const result = await axios.get(basestring+uristring);
    return result;
}

// PUT FUNCTIONS
export async function tdpost(uristring,ID){


}


//DATA TRANSFORM FUNCTIONS
export function axiosResultToArray(result,field){
    let arr = [];
    for (const [index, value] of result.data.entries()) {
        arr.push(value[field]);
    }
    return(arr);

}
