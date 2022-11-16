import { View, Text, TouchableOpacity, Image } from "react-native";

const CategoryCard = ({ imgURL, title }) => {
	return (
		<TouchableOpacity className="relative mr-2">
			<View>
				<Image
					className="h-20 w-20 rounded"
					source={{ uri: imgURL }}
				/>
			</View>

			<View>
				<Text className="absolute bottom-1 left-1 
				text-white font-bold">
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

export default CategoryCard;
