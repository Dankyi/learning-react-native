import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Foundation, Ionicons } from "@expo/vector-icons";

const Header = ({ title, photoURL, callEnabled }) => {
	const navigation = useNavigation();
	return (
		<View className="flex-row items-center justify-between p-2">
			<View className="flex-row items-center">
				<TouchableOpacity
					className="p-2"
					onPress={() => navigation.goBack()}
				>
					<Ionicons
						name="chevron-back-outline"
						color="#FF5864"
						size={34}
					/>
				</TouchableOpacity>

				<View className="flex-row items-center">
					{photoURL && (
						<Image
							className="w-8 h-8 rounded-full bg-slate-400"
							source={{ uri: photoURL }}
							resizeMode="contain"
						/>
					)}

					<Text className="text-lg font-semibold pl-2">
						{title}
					</Text>
				</View>
			</View>

			{callEnabled && (
				<TouchableOpacity
					className="p-3 mr-4 w-12 items-center
						bg-[#fad9db] rounded-full"
				>
					<Foundation
						name="telephone"
						color="#FF5864"
						size={25}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default Header;
