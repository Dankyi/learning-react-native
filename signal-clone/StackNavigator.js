import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{
			headerStyle: { backgroundColor: "#2C6BED" },
			headerTitleStyle: { color: "white" },
			headerTintColor: "white"
		}}
		>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
