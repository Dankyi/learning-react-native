import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
	AntDesign, Ionicons,
	Entyp, MaterialCommunityIcons
} from "@expo/vector-icons";
import {
	SafeAreaView, View, TouchableOpacity, Image, Text
} from "react-native";

import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
	const { user, logout } = useAuth();
	const [profilePressed, setProfilePressed] = React.useState(false);
	const navigation = useNavigation();

	return (
		<SafeAreaView>
			{/* Header section of HomeScreen */}
			<View className="flex-row justify-between items-center px-4">
				{/* Profile picture and its dropdown */}
				<View className="relative">
					{/* Profile picture */}
					<TouchableOpacity
						onPress={() => setProfilePressed(!profilePressed)}
					>
						<Image
							className="w-10 h-10 rounded-full"
							source={{ uri: user.photoURL }}
						/>
					</TouchableOpacity>

					{/* Dropdown */}
					<View className={`absolute top-11 w-20 h-14 p-2 shadow-lg
						bg-white rounded-md ${!profilePressed && "hidden"}`}
					>
						<TouchableOpacity
							className="flex-row space-x-1"
							onPress={logout}
						>
							<MaterialCommunityIcons
								name="logout"
								color="#FF5864"
								size={15}
							/>

							<Text>Logout</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Tinder icon */}
				<TouchableOpacity>
					<Image
						className="w-12 h-12"
						source={require("../assets/tinder-logo.png")}
					/>
				</TouchableOpacity>

				{/* Chat icon */}
				<TouchableOpacity
					onPress={() => navigation.navigate("ChatScreen")}>
					<Ionicons
						name="chatbubbles-sharp"
						color="#FF5864"
						size={30}
					/>
				</TouchableOpacity>
			</View>

		</SafeAreaView>
	);
};

export default HomeScreen;
