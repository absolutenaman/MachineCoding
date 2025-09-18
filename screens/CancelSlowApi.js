import React, {useEffect, useState} from 'react';
import axios from "axios";

function CancelSlowApi() {
    const [response, setResponse] = useState('');
    const api1 = "https://dogapi.dog/api/v2/breeds"
    const controller = new AbortController();
    useEffect(() => {
        axios.get(api1, { signal: controller.signal }).then((res) => {
            setResponse(res)
            controller.abort()
            console.log("!!! api2 got cancelled")
        }).catch((err) => {
            console.log(err)
        })
        axios.get('https://api.escuelajs.co/api/v1/products', { signal: controller.signal }).then((res) => {
            setResponse(res)
            controller.abort()
            console.log("!!! api1 got cancelled")

        }).catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        <></>
    );
}

export default CancelSlowApi;