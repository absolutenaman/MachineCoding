import React, {lazy, Suspense} from 'react';
import {View, StyleSheet, Text} from "react-native";
// import AboutUs from "./AboutUs";
const AboutUs = lazy(() => import('./AboutUs.js'));

const LazyLoading = () => {
    return (
        <View style={styles.container}>
            <Suspense fallback={(<View><Text>Waiting.....</Text></View>)}>
                <AboutUs/>
            </Suspense>
        </View>
    );
};

export default LazyLoading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 200
    }
})