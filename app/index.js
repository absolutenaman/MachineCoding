import ImageData from "../components/ImageData";
import HomeScreen from "../screens/Homescreen";
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator()

const App = () => {
    return (
        <Stack.Navigator initialRouteName={"/Home"}>
            <Stack.Screen name="/pictureData" component={ImageData} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="/Home" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default App;