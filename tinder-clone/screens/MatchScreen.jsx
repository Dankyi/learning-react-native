import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

const MatchScreen = () => {
	const navigation = useNavigation();
	const { params } = useRoute();
	const { loggedInUserProfile, profileSwiped } = params;

	return (
		<View className="h-full pt-20">
			<View className="px-5 pt-20 justify-center">
				<Image
					className="w-full h-20"
					source={{ uri: "https://links.papareact.com/mg9" }}
				/>
			</View>

			<Text className="mt-5 text-white font-semibold text-center">
				You and {profileSwiped.displayName} have liked each other
			</Text>

			<View className="flex-row justify-evenly mt-6">
				<Image
					className="w-32 h-32 rounded-full"
					source={{ uri: profileSwiped.photoURL }}
				/>

				<Image
					className="w-32 h-32 rounded-full"
					source={{ uri: loggedInUserProfile.photoURL }}
				/>
			</View>

			<TouchableOpacity
				className="mt-16 w-60 p-4 bg-white self-center rounded-full"
				onPress={() => {
					navigation.goBack();
					navigation.navigate("ChatScreen");
				}}
			>
				<Text className="text-base font-semibold text-center">
					Send a message
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MatchScreen;
