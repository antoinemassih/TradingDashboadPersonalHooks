import React, {useEffect, useState} from 'react';
import {ETAuthorizeCall} from "../../Utilities/Authorize/ETAuth.js";
import axios from "axios";
import {ETrade} from 'e-trade-api';
const eTrade = new ETrade({
    key: 'e80ab41cddc71cd0c7326ad5cc848d4c',
    secret: '03bda6466d9b9e717a18d8029c7af916499a8c75904c226c954fa231e03beb43'
});



export default function Home() {
    // Declare a new state variable, which we'll call "count"
    const [url, setURL] = useState("");
    const [thecode,setCode] = useState("123");

    const handleChange = (event) => {

        setCode(event.target.value);
        console.log(thecode);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get('https://37azrq5ps7.execute-api.eu-west-1.amazonaws.com/dev/trades?code='+thecode)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const handleAuthenticate = (e) => {

        async function AuthorizeET(){
            return await eTrade.requestToken();
        }
        AuthorizeET().then(result=>console.log("this is the urk :"+result));

    }

        useEffect(()=>{

        ETAuthorizeCall().then(result=>{
            console.log(result);
                setURL(result);
            })
    },[]);



    return (
        <div className="flex-grow">


            <div>
                Click this link to authorize:
            </div>
               <div className="text-sm text-TDOffWhite">
                   <a href={url} target="popup">{url}</a>
               </div>

            <div>
                <form onSubmit={handleSubmit}>
                        <label htmlFor="code">Code</label>
                        <input type="text" name="code" value={thecode} onChange={handleChange} required />

                        <button type="submit">Submit</button>

                </form>
                <form onSubmit={handleAuthenticate}>



                    <button type="submit">Authenticate</button>

                </form>
            </div>





        </div>

    );
}