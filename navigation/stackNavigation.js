import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Scanner from "../screens/scanner";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
