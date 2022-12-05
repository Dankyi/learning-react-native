import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
			/>

			<Stack.Screen
				name="ChatScreen"
				component={ChatScreen}
			/>

			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
