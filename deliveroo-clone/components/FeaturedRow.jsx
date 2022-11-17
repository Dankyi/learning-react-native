import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import Card from "./Card";

const turquoise = "#00ccbb";

const FeaturedRow = ({ id, title, description }) => {
	return (
		<View className="mx-4 mb-4">
			<View>
				<View className="flex-row mt-4 justify-between items-center">
					<Text className="font-bold text-base">{title}</Text>
					<ArrowRightIcon color={turquoise} />
				</View>

				<Text className="text-gray-600 text-xs mb-1.5">
					{description}
				</Text>
			</View>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{/* Card Element */}
				<Card
					id="1"
					imgURL="https://links.papareact.com/gn7"
					title="Nando's"
					rating={4.8}
					description="Offers"
					genre="Chinese"
					dishes={[]}
					address="George Street"
					lng={415}
					lat={1245}
				/>

				<Card
					id="2"
					imgURL="https://links.papareact.com/gn7"
					title="Nando's"
					rating={4.8}
					description="Offers"
					genre="English"
					dishes={[]}
					address="Clink Street"
					lng={415}
					lat={1245}
				/>

			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
