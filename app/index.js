import ImageData from "../components/ImageData";
import HomeScreen from "../screens/Homescreen";
import {createStackNavigator} from '@react-navigation/stack';
import DataPolling from "../screens/DataPolling";

const Stack = createStackNavigator()

const App = () => {
    return (
        <Stack.Navigator initialRouteName={"/DataPolling"}>
            <Stack.Screen name="/pictureData" component={ImageData} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="/Home" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="/DataPolling" component={DataPolling} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default App;