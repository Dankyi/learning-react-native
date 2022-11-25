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

	if (!allBasketItems.length) return null;

	return (
		<View className="absolute bottom-10 w-full z-50">
			<TouchableOpacity
				className="flex-row items-center p-4 
				bg-turquoise mx-5 rounded-lg space-x-1"
				onPress={() => navigation.navigate("ShoppingBasket")}
			>
				<Text className="px-2 py-1 text-base font-semibold 
					text-white bg-darkTurquoise">
					{allBasketItems.length}
				</Text>

				<Text className="flex-1 text-center text-white 
					text-base font-semibold">
					View Basket
				</Text>

				<Text className="text-white text-base font-extrabold">
					<Currency quantity={basketTotal} currency="GBP" />
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BasketIcon;
