import { View, Text, SafeAreaView } from "react-native";

import Map from "../components/Map";

const MapScreen = () => {
	return (
		<View>
			<View className="h-1/2">
				<Map />
			</View>

			<View className="h-1/2">

			</View>
		</View>
	);
};

export default MapScreen;
