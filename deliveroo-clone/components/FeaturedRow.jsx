import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import sanityClient from "../sanity";
import FeaturedRowCard from "./FeaturedRowCard";

const turquoise = "#00ccbb";

const query = `* [_type == "featured" && _id == $id] {
	...,
	restaurants[]-> {
		...,
		dishes[]->
	}
}[0]`;

const FeaturedRow = ({ id, title, description }) => {
	const [restaurants, setRestaurants] = React.useState([]);

	React.useEffect(() => {
		sanityClient.fetch(query, { id })
			.then(data => setRestaurants(data?.restaurants));
	}, [id]);

	const allRestaurants = restaurants.map(restaurant => (
		<FeaturedRowCard
			key={restaurant._id}
			id={restaurant._id}
			address={restaurant.address}
			dishes={restaurant.dishes}
			imgURL={restaurant.image}
			lat={restaurant.lng}
			lng={restaurant.lat}
			title={restaurant.name}
			rating={restaurant.rating}
			description={restaurant.short_description}
			genre={restaurant.name}
		/>
	));

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
				{allRestaurants}
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
