import React from 'react';
import {Text, View} from "react-native";

const ImageData = ({route}) => {
    const {title,description}= route?.params?.data?.data[0]
    return (
        <View>
            <Text>Title :{title}</Text>
            <Text>Description :{description}</Text>
        </View>
    );
};

export default ImageData;