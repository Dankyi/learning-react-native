import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import Map from "../components/Map";
import MapScreenBottom from "../components/MapScreenBottom";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
	const Stack = createNativeStackNavigator();

	return (
		<View>
			<View className="h-1/2">
				<Map />
			</View>

			<View className="h-1/2">
				<Stack.Navigator>
					<Stack.Screen
						name="MapScreenBottom"
						component={MapScreenBottom}
						options={{
							headerShown: false
						}}
					/>

					<Stack.Screen
						name="RideOptionsCard"
						component={RideOptionsCard}
						options={{
							headerShown: false
						}}
					/>
				</Stack.Navigator>
			</View>
		</View>
	);
};

export default MapScreen;
