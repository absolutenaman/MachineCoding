import React from 'react';
import {FlatList, Image, StyleSheet, View} from "react-native";

const ImageRoller = ({images}) => {
    return (<View style={styles.container}>
            <FlatList columnWrapperStyle={styles.container} numColumns={3} data={images} renderItem={(item, index, images) => {
                return (<Image key={item?.item?.links?.[0]?.href}  height={200} width={200} src={item?.item?.links?.[0]?.href}/>)
            }}></FlatList>
        </View>
    )
}
export default ImageRoller;

const styles = StyleSheet.create(({
    container: {
        justifyContent: 'space-between',
    },
}))