import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const AboutUs = () => {
    return (
        <View >
        <Text style={styles.container}>About us</Text>
        </View>
    );
};

export default AboutUs;
const styles=StyleSheet.create({
    container:{
        fontSize:24,
        textAlign:"center"
    }
})