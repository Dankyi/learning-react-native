import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import {
	View, Text, FlatList,
	TouchableOpacity, Image
} from "react-native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
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

const HomeOptions = () => {
	const navigation = useNavigation();
	const origin = useSelector(selectOrigin);

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			horizontal
			showsHorizontalScrollIndicator={false}
			renderItem={({ item }) => (
				<TouchableOpacity
					className="bg-gray-200 w-40 mt-5 mr-3 py-2.5"
					disabled={!origin}
					onPress={() => navigation.navigate(item.screen)}
				>
					<View className={!origin && "opacity-30"}>
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

export default HomeOptions;
