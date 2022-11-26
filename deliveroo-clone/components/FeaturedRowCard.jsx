import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

import { urlFor } from "../sanity";

const turquoise = "#00ccbb";

const FeaturedRowCard = ({
	id, imgURL, title, rating, description,
	genre, dishes, address, lng, lat
}) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			key={id}
			className="max-w-sm rounded mr-4 bg-white overflow-hidden shadow-lg"
			onPress={() => navigation.navigate("RestaurantScreen", {
				id, imgURL, title, rating, description,
				genre, dishes, address, lng, lat
			})}
		>
			<Image
				className="w-64 h-36"
				source={{ uri: urlFor(imgURL).url() }}
			/>

			<View className="px-3 py-2 space-y-1">
				<Text className="font-bold text-base">{title}</Text>

				<View className="flex-row items-center space-x-1.5">
					<StarIcon color={turquoise} opacity={0.5} />
					<Text className="text-turquoise">{rating}</Text>
					<Text className="text-darkGray text-2xl">&#183;</Text>
					<Text className="text-darkGray text-xs">{genre}</Text>
				</View>

				<View className="flex-row items-center space-x-1.5">
					<MapPinIcon color="gray" />
					<Text className="text-darkGray text-xs">Nearby {address}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default FeaturedRowCard;
