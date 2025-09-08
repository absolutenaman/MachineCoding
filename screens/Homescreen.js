import {Button, StyleSheet, Text, View} from 'react-native';
import usePlanetImages from "../hooks/usePlanetImages";
import ImageRoller from "../components/ImageRoller";
import Search from "../components/Search";
import {useState} from "react";

export default function HomeScreen() {
    const [planetName, setPlanetName] = useState("moon");
    const {imagesData} = usePlanetImages(planetName);
    return (
        <View style={styles.container}>
            <Search setPlanetName={setPlanetName}/>
            {
                imagesData?.length > 0 ? <View>
                    <ImageRoller images={imagesData}>
                    </ImageRoller>
                </View> : <View>
                    <Text>No Data</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    container: {
        flex: 1,
        padding: 20
    }
});
