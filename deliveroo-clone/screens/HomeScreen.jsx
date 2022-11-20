import React from "react";
import { Text, View, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	UserIcon,
	ChevronDownIcon,
	AdjustmentsVerticalIcon,
	MagnifyingGlassIcon
} from "react-native-heroicons/outline";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const turquoise = "#00ccbb";

const query = `* [_type == "featured"] {
	...,
	restaurants[]-> {
		...,
		dishes[]->
	}
}`;

const HomeScreen = () => {
	const navigation = useNavigation();
	const [features, setFeatures] = React.useState([]);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	React.useEffect(() => {
		sanityClient.fetch(query)
			.then(data => setFeatures(data));
	}, []);

	const allFeatures = features?.map(feature => (
		<FeaturedRow
			key={feature._id}
			id={feature._id}
			title={feature.name}
			description={feature.short_description}
		/>
	));

	return (
		<SafeAreaView className="bg-white pt-3 h-full">
			{/* Header */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				<View>
					<Image
						source={{ uri: "https://links.papareact.com/wru" }}
						className="h-7 w-7 bg-lightGray p-4 rounded-full"
					/>
				</View>

				<View className="flex-1">
					<Text className="font-bold text-lightGray text-xs">
						Deliver Now
					</Text>

					<Text className="font-bold text-xs">
						Current Location
						<ChevronDownIcon size={20} color={turquoise} />
					</Text>
				</View>

				<View>
					<UserIcon size={35} color={turquoise} />
				</View>
			</View>

			{/* Search */}
			<View className="flex-row items-center mx-4 space-x-2 pb-2">
				<View className="flex-row flex-1 p-3 space-x-2 bg-lighterGray">
					<MagnifyingGlassIcon size={20} color="gray" />
					<TextInput
						placeholder="Restaurants and Cuisines"
						keyboardType="default"
					/>
				</View>

				<View>
					<AdjustmentsVerticalIcon color={turquoise} />
				</View>
			</View>

			{/* Body */}
			<ScrollView className="bg-lighterGray">
				<Categories />

				{allFeatures}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
