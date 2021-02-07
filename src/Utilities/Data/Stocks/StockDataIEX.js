
import axios from 'axios';

export default function fetchStockDataIEX(ticker){

async function fetchData(ticker2){
    let requestString = 'https://sandbox.iexapis.com/stable/stock/'+ticker2+'/price?token=Tsk_b7a45cc65e624a55a5688d15eac1b692';
    let myJson = await axios.get(requestString);
    return myJson;
}
    //let data = {"Symbol":ticker,"price":price,"open":21,"close":21};

    return fetchData(ticker);


}