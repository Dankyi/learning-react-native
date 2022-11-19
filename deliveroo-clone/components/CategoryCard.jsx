import { View, Text, TouchableOpacity, Image } from "react-native";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgURL, title }) => {
	return (
		<TouchableOpacity className="relative mr-2">
			<View>
				<Image
					className="h-20 w-20 rounded"
					source={{ uri: urlFor(imgURL).url() }}
				/>
			</View>

			<View>
				<Text className="absolute bottom-1 left-1 
				text-turquoise font-bold">
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CategoryCard;
