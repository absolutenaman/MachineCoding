import React, { useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from "react-native";
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
                    return (
                        <View>

                        <Text key={index} style={{fontSize: 20}}>{item?.title}</Text>
                            <Image src={item?.images[0]} width={400} height={400} />
                        </View>
                            )
                }}/>
            </View>
    );
};

export default InfiniteScrolling;

