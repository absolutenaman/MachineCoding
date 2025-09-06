import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";
import axios from "axios";

const DataPolling = () => {
    const api = "https://dogapi.dog/api/v2/breeds"
    const [res, setRes] = useState([])
    const ids = ["036feed0-da8a-42c9-ab9a-57449b530b13", "dd9362cc-52e0-462d-b856-fccdcf24b140", "1460844f-841c-4de8-b788-271aa4d63224", "e7e99424-d514-4b56-9f0c-05736f6dd22d"];
    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            if (count < 4) {
                axios.get(`${api}/${ids[count]}`)
                    .then((data) => {
                        setRes(prevItems => [...prevItems, data])
                    })
                    .catch((err) => console.error(err));
                count++;
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return <View style={styles.wrapper}>
        <FlatList data={res}  renderItem={({item,index}) => {
            return (<View key={index}>
                <Text>{item?.data?.data?.attributes?.name}</Text>
                <Text>{item?.data?.data?.attributes?.description}</Text>
            </View>)
        }}
        />
    </View>;
}

export default DataPolling;

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        padding: 20,
        marginBottom: 40,
        flex: 1,
        marginTop: 200,
    },
})

