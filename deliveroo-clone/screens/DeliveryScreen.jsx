import { useNavigation } from "@react-navigation/native";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import {
	View, Text, SafeAreaView,
	TouchableOpacity, Image
} from "react-native";

const turquoise = "#00ccbb";

const DeliveryScreen = () => {
	const navigation = useNavigation();

	return (
		<View className="flex-1 bg-turquoise justify-between">
			<SafeAreaView className="z-50">
				<View className="flex-row p-5 justify-between items-center">
					<TouchableOpacity onPress={() => navigation.navigate("Home")}>
						<XMarkIcon size={30} color="white" />
					</TouchableOpacity>

					<Text className="text-lg text-white font-bold">
						Help?
					</Text>
				</View>

				<View className="mx-5 my-2 bg-white p-6 rounded-md shadow-md z-50">
					<View className="flex-row justify-between">
						<View>
							<Text className="text-lg text-darkGray">
								Estimated Arrival
							</Text>
							<Text className="text-3xl ">30-45 Minutes</Text>
						</View>

						<Image
							className="w-20 h-20"
							source={{ uri: "https://links.papareact.com/fls" }}
						/>
					</View>

					<Progress.Bar
						className="self-center"
						size={30}
						width={200}
						indeterminate={true}
						color={turquoise}
					/>

					<Text className="text-darkGray mt-4 self-center">
						Your order is being prepared!
					</Text>
				</View>
			</SafeAreaView>

			<SafeAreaView className="flex-row items-center h-28 bg-white space-x-5">
				<Image
					className="p-4 w-12 h-12 ml-5 bg-lightGray rounded-full"
					source={{ uri: "https://links.papareact.com/wru" }}
				/>

				<View className="flex-1">
					<Text className="text-lg">Kofi Adusei</Text>
					<Text className="text-darkGray">Your Rider</Text>
				</View>

				<Text className="mr-5 text-lg font-bold text-turquoise">
					Call
				</Text>
			</SafeAreaView>
		</View>
	);
};

export default DeliveryScreen;
