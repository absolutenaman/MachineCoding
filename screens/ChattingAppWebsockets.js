import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from "react-native";
import useWebSocket from '../hooks/useWebSocket'

const ChattingAppWebsockets = () => {
    const {webSocket, message} =useWebSocket();
    const [input, setInput] = useState('')

    const sendMessage = (input) => {
        if (webSocket && webSocket.readyState === webSocket.OPEN) {
            webSocket.send(input)
            setInput("");
        }
    }
    return <View style={{display: "flex", flex: 1, padding: 20}}>
        <Text>Hiii</Text>
        {
            message.map((item, index) => {
                return <Text key={index}>{item}</Text>
            })
        }
        <TextInput value={input} style={{padding: 20, borderRadius: 5, borderColor: "black", borderWidth: 2}}
                   onChangeText={(data) => {
                       setInput(data)
                   }}></TextInput>
        <Button title={"SEND"} onPress={() => sendMessage(input)}></Button>
    </View>

}

export default ChattingAppWebsockets;