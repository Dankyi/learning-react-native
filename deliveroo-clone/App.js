import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import ShoppingBasketScreen from "./screens/ShoppingBasketScreen";
import OrderPrepScreen from "./screens/OrderPrepScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<Stack.Navigator>
					<Stack.Screen
						name="HomeScreen"
						component={HomeScreen}
					/>

					<Stack.Screen
						name="RestaurantScreen"
						component={RestaurantScreen}
						options={{ headerShown: false }}
					/>

					<Stack.Screen
						name="ShoppingBasketScreen"
						component={ShoppingBasketScreen}
						options={{
							presentation: "modal",
							headerShown: false,
							contentStyle: {
								backgroundColor: "#fff"
							}
						}}
					/>

					<Stack.Screen
						name="OrderPrepScreen"
						component={OrderPrepScreen}
						options={{
							presentation: "fullScreenModal",
							headerShown: false
						}}
					/>

					<Stack.Screen
						name="DeliveryScreen"
						component={DeliveryScreen}
						options={{
							presentation: "fullScreenModal",
							headerShown: false
						}}
					/>
				</Stack.Navigator>
			</Provider>
		</NavigationContainer>
	);
};

export default App;
