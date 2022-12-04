import { Icon } from "@rneui/base";
import { View, FlatList, TouchableOpacity, Text } from "react-native";

const data = [
	{
		id: "1",
		icon: "home",
		location: "Home",
		destination: "123 Robert Street, Leeds"
	},
	{
		id: "2",
		icon: "briefcase",
		location: "Work",
		destination: "456 Adams Street, Leeds"
	}
];

const HomeFavourites = () => {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item: { location, destination, icon } }) => (
				<TouchableOpacity className="flex-row my-4 items-center
					space-x-3"
				>
					<View className="pt-2.5 bg-black w-10 h-10 rounded-full">
						<Icon
							name={icon}
							type="ionicon"
							size={18}
							color="white"
						/>
					</View>

					<View>
						<Text>{location}</Text>
						<Text>{destination}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default HomeFavourites;
