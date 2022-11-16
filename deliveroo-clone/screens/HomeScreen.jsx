import React from "react";
import { Text, View, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	UserIcon,
	ChevronDownIcon,
	AdjustmentsVerticalIcon,
	MagnifyingGlassIcon as MagnifyingGlassIcon
} from "react-native-heroicons/outline";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
	const navigation = useNavigation();

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [])

	return (
		<SafeAreaView className="bg-white pt-3">
			{/* Header */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				<View>
					<Image
						source={{ uri: "https://links.papareact.com/wru" }}
						className="h-7 w-7 bg-gray-300 p-4 rounded-full"
					/>
				</View>

				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">
						Deliver Now
					</Text>

					<Text className="font-bold text-xs">
						Current Location
						<ChevronDownIcon size={20} color="#00ccbb" />
					</Text>
				</View>

				<View>
					<UserIcon size={35} color="#00ccbb" />
				</View>
			</View>

			{/* Search */}
			<View className="flex-row items-center mx-4 space-x-2 pb-2">
				<View className="flex-row flex-1 p-3 space-x-2 bg-gray-200">
					<MagnifyingGlassIcon size={20} color="gray" />
					<TextInput
						placeholder="Restaurants and Cuisines"
						keyboardType="default"
					/>
				</View>

				<View>
					<AdjustmentsVerticalIcon color="#00ccbb" />
				</View>
			</View>

			{/* Body */}
			<ScrollView className="bg-gray-100 pb-28">
				<Categories />
				{/* Offers near you section*/}
				<FeaturedRow
					id="1"
					title="Offers near you"
					description="Why not support your local restaurant tonight!"
				/>
				{/* Featured */}
				<FeaturedRow
					id="2"
					title="Featured"
					description="Paid placement from our partners"
				/>

				{/* Tasty Discounts */}
				<FeaturedRow
					id="3"
					title="Tasty Discounts"
					description="Everyone's been enjoying these amazing discounts"
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen;
