import React, {useEffect, useState} from "react";
import {TextInput, View, StyleSheet} from "react-native";
import {debounce} from "../utils/util";

const Search = ({setPlanetName}) => {
    const onInputChangeHandler = (data) => {
        setInput(data);
    }
    const debounced=debounce(onInputChangeHandler);
    const [input, setInput] = useState('');
    useEffect(() => {
        setPlanetName(input)
    }, [input, setPlanetName]);

    return (<View style={styles.container}>
        <TextInput type={"text"} style={{height: 40}} onChangeText={(data)=>debounced(data)} placeholder={"Search"}/>
    </View>);
}

export default Search;

const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10
    }
});