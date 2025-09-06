import React from 'react';
import {Button, FlatList, Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
// import {storage} from "../mmkv/mmkv";

const ImageRoller = ({images}) => {
    const navigation = useNavigation();
    return (<View style={styles.container}>
            <FlatList columnWrapperStyle={styles.container} numColumns={3} data={images}
                      renderItem={(item, index, images) => {
                          return (<TouchableOpacity onPress={() => {
                              navigation.navigate("/pictureData", {
                                  data: item?.item
                              })
                          }}><Image key={item?.item?.links?.[0]?.href} height={200} width={200}
                                    src={item?.item?.links?.[0]?.href}/>
                              <Button title={"Add to favourites"} onPress={() => {
                                  // storage.set("images",JSON.stringify(storage.getString("images"),item))
                              }}/>
                          </TouchableOpacity>)
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