import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Platform } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import FoodScreen from "./screens/FoodScreen";
import store from "./store";

const App = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<KeyboardAvoidingView
						className="flex-1"
						behavior={Platform.OS === "ios" ? "padding" : "height"}
						keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
					>
						<Stack.Navigator>
							<Stack.Screen
								name="HomeScreen"
								component={HomeScreen}
								options={{
									headerShown: false
								}}
							/>

							<Stack.Screen
								name="MapScreen"
								component={MapScreen}
								options={{
									headerShown: false
								}}
							/>

							<Stack.Screen
								name="FoodScreen"
								component={FoodScreen}
								options={{
									headerShown: false
								}}
							/>
						</Stack.Navigator>
					</KeyboardAvoidingView>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
