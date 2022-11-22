import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";

import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";

const BasketIcon = () => {
	const allBasketItems = useSelector(selectBasketItems);
	const basketTotal = useSelector(selectBasketTotal);

	const navigation = useNavigation();

	return (
		<View className="absolute bottom-10 w-full z-50">
			<TouchableOpacity className="flex-row items-center p-4 
				bg-turquoise mx-5 rounded-lg space-x-1">
				<Text className="px-2 py-1 text-lg font-extrabold 
					text-white bg-darkTurquoise">
					{allBasketItems.length}
				</Text>

				<Text className="flex-1 text-center text-white text-lg font-extrabold">View Basket</Text>

				<Text className="text-white text-lg font-extrabold">
					<Currency quantity={basketTotal} currency="GBP" />
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BasketIcon;
