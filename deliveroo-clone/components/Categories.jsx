import { View, Text, ScrollView } from "react-native";

import CategoryCard from "./CategoryCard";

const Categories = () => {
	return (
		<ScrollView
			className="mx-4 pt-2.5"
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			<CategoryCard
				imgURL="https://links.papareact.com/gn7"
				title="Testing 1"
			/>
			<CategoryCard
				imgURL="https://links.papareact.com/gn7"
				title="Testing 2"
			/>
			<CategoryCard
				imgURL="https://links.papareact.com/gn7"
				title="Testing 3"
			/>
			<CategoryCard
				imgURL="https://links.papareact.com/gn7"
				title="Testing 4"
			/>
		</ScrollView>
	);
};

export default Categories;
