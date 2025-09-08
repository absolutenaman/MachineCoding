import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";

const Tabs = ({tabsData}) => {
    const [isClicked, setIsClicked] = useState()
    return <View style={styles.block}>
        {tabsData?.map((item, index) => {
            return (
                <TouchableOpacity key={index} onPress={() => {
                    setIsClicked(index)
                }}>
                    <Text style={styles.tabsText}>{item?.title}</Text>
                    {
                        isClicked===index && item?.children?.length > 0 ?
                            <Tabs tabsData={item?.children}></Tabs> : <></>
                    }
                </TouchableOpacity>
            )
        })}
    </View>
}


export default Tabs;

const styles = StyleSheet.create({
    block: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "blue",
        justifyContent: "space-between",
        // padding: 20,
        overflow: "scroll"
    },
    tabsText: {
        borderWidth: 10,
        fontSize: 20,
        borderColor: "black"
    }
})