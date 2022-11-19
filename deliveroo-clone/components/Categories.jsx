import React from "react";
import { ScrollView } from "react-native";

import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";

const query = `* [_type == "category"]`;

const Categories = () => {
	const [categories, setCategories] = React.useState([]);

	React.useEffect(() => {
		sanityClient.fetch(query)
			.then(data => setCategories(data));
	}, []);

	const allCategories = categories.map(category => (
		<CategoryCard
			key={category._id}
			imgURL={category.image}
			title={category.name}
		/>
	));

	return (
		<ScrollView
			className="mx-4 pt-2.5 mb-4"
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{allCategories}
		</ScrollView>
	);
};

export default Categories;
