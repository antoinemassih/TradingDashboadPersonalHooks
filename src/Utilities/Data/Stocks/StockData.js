export default function fetchStockData(ticker){


var price = Math.floor(Math.random() * 25)+ 100;
var open = Math.floor(Math.random() * 25)+ 100;
var close = Math.floor(Math.random() * 25)+100;

    let data = {"Symbol":ticker,"price":price,"open":open,"close":close};

    return data;


}