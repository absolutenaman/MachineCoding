import React, { useEffect, useState} from 'react';
import { FlatList, Text, View} from "react-native";
import axios from "axios";

const InfiniteScrolling = () => {
    const [offset, setOffSet] = useState(0);
    const [limit, setLimit] = useState(10);
    const [response, setResponse] = useState([]);
    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`).then((res) => {
            setResponse((prevState)=>[...prevState,...res?.data]);
        });
    }, [offset]);
    console.log(response)

    return (
            <View style={{flex: 1, marginTop: 20, display: 'flex', alignItems: "center", justifyContent: "center"}}>
                <FlatList data={response} onEndReached={()=>{
                    setOffSet((prevState)=>prevState+10)
                }}  renderItem={({item,index}) => {
                    return <Text key={index} style={{fontSize: 40}}>{item?.title}</Text>
                }}/>
            </View>
    );
};

export default InfiniteScrolling;

