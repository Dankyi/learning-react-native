import { View, SafeAreaView, Image } from "react-native";

import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="p-4">
				<Image
					className="w-24 h-8 object-contain"
					source={{ uri: "https://links.papareact.com/gzs" }}
				/>

				<NavOptions />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
