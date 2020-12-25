import axios from "axios";

//CONFIG

let basestring = " https://m5c616wtc8.execute-api.eu-west-1.amazonaws.com/dev/";

//GET FUNCTIONS
export async function etgetall(){
    const result = await axios.get(basestring);
    console.log(Object.entries(result.data));
    return Object.entries(result.data[0]);
}

// PUT FUNCTIONS
export async function etpost(uristring,ID){


}


//DATA TRANSFORM FUNCTIONS
export function etaxiosResultToArray(result,field){
    let arr = [];
    for (const [index, value] of result.data.entries()) {
        arr.push(value[field]);
    }
    return(arr);

}
