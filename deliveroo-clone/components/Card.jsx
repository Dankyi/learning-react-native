import { View, Text, Image, TouchableOpacity } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

const turquoise = "#00ccbb";

const Card = ({
	id, imgURL, title, rating, description,
	genre, dishes, address, lng, lat
}) => {
	return (
		<TouchableOpacity className="max-w-sm rounded mr-2 bg-white overflow-hidden shadow-lg">
			<Image
				className="w-64 h-36"
				source={{ uri: imgURL }}
			/>

			<View className="px-3 py-2 space-y-1">
				<Text className="font-bold text-base">{title}</Text>

				<View className="flex-row items-center space-x-1.5">
					<StarIcon color={turquoise} opacity={0.5} />
					<Text className="text-turquoise">{rating}</Text>
					<Text className="text-gray-600 text-2xl">&#183;</Text>
					<Text className="text-gray-600 text-xs">{genre}</Text>
				</View>

				<View className="flex-row items-center space-x-1.5">
					<MapPinIcon color="gray" />
					<Text className="text-gray-600 text-xs">Nearby {address}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Card;
