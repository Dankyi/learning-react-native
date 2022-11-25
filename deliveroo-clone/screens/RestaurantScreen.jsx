
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import {
	View, Text, ScrollView, Image, TouchableOpacity
} from "react-native";

import { urlFor } from "../sanity";
import DishCard from "../components/DishCard";
import BasketIcon from "../components/BasketIcon";

const turquoise = "#00ccbb";

const RestaurantScreen = () => {
	const navigation = useNavigation();

	const {
		params: {
			id, imgURL, title, rating, description,
			genre, dishes, address, lng, lat
		}
	} = useRoute();

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<>
			<BasketIcon />

			<ScrollView>
				<View className="mb-32">
					<View className="relative">
						<Image
							className="w-full h-52"
							source={{ uri: urlFor(imgURL).url() }}
						/>

						<TouchableOpacity
							className="absolute p-2 rounded-full 
								left-6 top-14 bg-lighterGray"
							onPress={() => navigation.goBack()}
						>
							<ArrowLeftIcon color={turquoise} size={26} opacity={0.7} />
						</TouchableOpacity>
					</View>

					<View className="bg-white">
						<View className="px-4 pt-4">
							<Text className="text-xl font-bold">{title}</Text>
							<View className="flex-row my-1 space-x-1.5">
								<View className="flex-row items-center space-x-1.5">
									<StarIcon color={turquoise} opacity={0.5} />

									<Text className="text-xs text-darkGray">
										<Text>{rating}</Text>
										<Text>&#183;</Text>
										<Text>{title}</Text>
									</Text>
								</View>
							</View>

							<View className="flex-row items-center space-x-1.5 mb-2">
								<MapPinIcon color="gray" />
								<Text className="text-xs text-darkGray">
									Nearby {address}
								</Text>
							</View>

							<Text className="text-xs text-darkGray mb-3">
								{description}
							</Text>

							<TouchableOpacity className="flex-row justify-between items-center 
								border border-t-lighterGray border-x-0 border-b-0 pt-3 mb-3"
							>
								<View className="flex-row space-x-3 items-center">
									<QuestionMarkCircleIcon color="gray" />
									<Text className="font-bold">Have a food allergy?</Text>
								</View>
								<ChevronRightIcon color="turquoise" />
							</TouchableOpacity>
						</View>
					</View>

					<Text className="p-4 font-bold text-base">Menu</Text>

					{dishes?.map(dish => (
						<DishCard
							key={dish._id}
							id={dish._id}
							name={dish.name}
							description={dish.short_description}
							imgURL={urlFor(dish.image).url()}
							price={dish.price}
						/>
					))}
				</View>
			</ScrollView>
		</>
	);
};

export default RestaurantScreen;
