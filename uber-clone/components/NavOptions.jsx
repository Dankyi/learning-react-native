import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import {
	View, Text, FlatList,
	TouchableOpacity, Image
} from "react-native";

const navData = [
	{
		id: "1",
		title: "Get a ride",
		image: "https://links.papareact.com/3pn",
		screen: "MapScreen"
	},
	{
		id: "2",
		title: "Order food",
		image: "https://links.papareact.com/28w",
		screen: "FoodScreen"
	}
];

const NavOptions = () => {
	const navigation = useNavigation();

	return (
		<FlatList
			data={navData}
			keyExtractor={(item) => item.id}
			horizontal
			showsHorizontalScrollIndicator={false}
			renderItem={({ item }) => (
				<TouchableOpacity
					className="bg-gray-200 w-40 mt-5 mr-3 py-2.5"
					onPress={() => navigation.navigate(item.screen)}
				>
					<View>
						<Image
							className="h-36"
							source={{ uri: item.image }}
						/>

						<Text className="font-semibold text-base
							mt-2 self-center">
							{item.title}
						</Text>

						<View className="mt-3 bg-black p-2 w-10 
							rounded-full self-center"
						>
							<Icon
								type="antdesign"
								name="arrowright"
								color="white"
							/>
						</View>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions;
