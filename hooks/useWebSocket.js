import {useEffect, useMemo, useState} from "react";

const UseWebSocket = (factory) => {
    const webSocket = useMemo(()=>new WebSocket('http://localhost:8080/ws'),[]);
    const [message, setMessage] = useState([])

    useEffect(() => {
        webSocket.onopen = () => {
            console.log("Connected tp Webserver")
        }
        webSocket.onmessage = (event) => {
            console.log(event)
            setMessage((prevState) => [...prevState, event.data])
        }
        webSocket.onclose = () => console.log("Diconnected from server")

    }, [webSocket]);
    return {webSocket, message, setMessage}
};
export default UseWebSocket
