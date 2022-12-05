import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import HomeScreen from "./screens/HomeScreen";

const App = () => {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{
						headerShown: false
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
