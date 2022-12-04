import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "@rneui/base";
import { TouchableOpacity, View } from "react-native";

import Map from "../components/Map";
import MapScreenBottom from "../components/MapScreenBottom";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
	const Stack = createNativeStackNavigator();
	const navigation = useNavigation();

	return (
		<View>
			<TouchableOpacity
				className="absolute top-16 left-4 p-3 z-50 
					bg-gray-100 shadow-lg rounded-full"
				onPress={() => navigation.navigate("HomeScreen")}
			>
				<Icon name="home" />
			</TouchableOpacity>

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
