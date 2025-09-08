import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";

const Tabs = ({tabsData}) => {
    const [isClicked, setIsClicked] = useState({})
    return <View style={styles.block}>
        {tabsData?.map((item, index) => {
            return (
                <TouchableOpacity key={index} onPress={() => {
                    setIsClicked(item.Title=true)
                }}>
                    <Text style={styles.tabsText}>{item?.Title}</Text>
                    {
                        isClicked[item.Title] && item?.Child?.length > 0 ?
                            <Tabs tabsData={item?.Child}></Tabs> : <></>
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
        flexDirection: "row",
        backgroundColor: "blue",
        justifyContent: "space-between",
        padding: 20,
        overflow:"scroll"
    },
    tabsText: {
        borderWidth: 10,
        fontSize: 36,
        borderColor: "black"
    }
})