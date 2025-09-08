import ImageData from "../components/ImageData";
import HomeScreen from "../screens/Homescreen";
import {createStackNavigator} from '@react-navigation/stack';
import DataPolling from "../screens/DataPolling";
import LazyLoading from "../screens/LazyLoading";
import Tabs from "../screens/Tabs";

const Stack = createStackNavigator()

const App = () => {
    const tabsData = [{
        Title: "Tab 1",
        Child: [{Title: "Child Tab 1.1"}, {Title: "Child Tab 1.2"}]
    }, {
        Title: "Tab 2",
        Child: [{Title: "Child Tab 2.1"}, {Title: "Child Tab 2.2"}]
    }]

    return (
        <Stack.Navigator initialRouteName={"/Tabs"}>
            <Stack.Screen name="/pictureData" component={ImageData} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="/Home" component={HomeScreen} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="/DataPolling" component={DataPolling} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name={"/LazyLoading"} component={LazyLoading} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name={"/Tabs"} component={() => Tabs({tabsData})}
                          options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default App;