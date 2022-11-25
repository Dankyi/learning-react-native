import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import ShoppingBasketScreen from "./screens/ShoppingBasketScreen";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
					/>

					<Stack.Screen
						name="Restaurant"
						component={RestaurantScreen}
					/>

					<Stack.Screen
						name="ShoppingBasket"
						component={ShoppingBasketScreen}
						options={{
							presentation: "modal",
							headerShown: false,
							contentStyle: {
								backgroundColor: "#fff"
							}
						}}
					/>
				</Stack.Navigator>
			</Provider>
		</NavigationContainer>
	);
};

export default App;
