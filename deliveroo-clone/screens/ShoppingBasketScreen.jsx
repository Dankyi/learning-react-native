import React from "react";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import {
	View, Text, ScrollView, Image,
	TouchableOpacity, Dimensions
} from "react-native";
import {
	MinusCircleIcon, PlusCircleIcon,
	ShoppingCartIcon, XCircleIcon
} from "react-native-heroicons/solid";

import { urlFor } from "../sanity";
import {
	removeFromBasket, addToBasket,
	selectBasketItems, selectBasketTotal
} from "../features/basketSlice";

const turquoise = "#00ccbb";
const deliveryFee = 4.99;

const windowWidth = Dimensions.get("window").width;

const ShoppingBasket = () => {
	const navigation = useNavigation();
	const allBasketItems = useSelector(selectBasketItems);
	const basketTotal = useSelector(selectBasketTotal);
	const dispatch = useDispatch();

	const [groupedBasketItems, setGroupedBasketItems] = React.useState([]);

	React.useMemo(() => {
		// This groups all the items in the basket (into an
		// object of arrays) by id see e.g. in logs.json file
		const groupedItems = allBasketItems.reduce((results, item) => {
			(results[item.id] = results[item.id] || []).push(item);
			return results;
		}, {});

		setGroupedBasketItems(groupedItems);
	}, [allBasketItems]);

	const groupedItemsList = Object.entries(groupedBasketItems).map(([key, items]) => (
		<View key={key} className="flex-row items-center p-4 bg-white 
			border-b border-b-lighterGray"
		>
			<View className="flex-row flex-1 items-center space-x-2">
				<Text className="text-sm text-turquoise">
					{items.length} x
				</Text>

				<Image
					source={{ uri: urlFor(items[0]?.imgURL).url() }}
					className="h-7 w-7 bg-lightGray p-4 rounded-full"
				/>

				<Text className="text-sm">
					{windowWidth < 428
						? items[0].name.substring(0, 14) + "..."
						: items[0].name
					}
				</Text>
			</View>

			<View className="flex-row items-center space-x-2">
				<Text className="text-sm">
					<Currency quantity={items[0]?.price} currency="GBP" />
				</Text>

				<View className="space-y-2.5">
					<TouchableOpacity onPress={() => dispatch(addToBasket({
						id: items[0].id,
						name: items[0].name,
						description: items[0].description,
						imgURL: urlFor(items[0]?.imgURL).url(),
						price: items[0].price
					}))}
					>
						<PlusCircleIcon color={turquoise} size={28} opacity={0.7} />
					</TouchableOpacity>

					<TouchableOpacity onPress={() => dispatch(removeFromBasket(key))}>
						<MinusCircleIcon color={turquoise} size={28} opacity={0.7} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	));

	return (
		<>
			<View className="absolute bottom-0 z-50 px-4 pb-5 pt-3 space-y-1.5 
				w-full bg-white border-t border-x border-turquoise rounded-t-2xl"
			>
				<View className="flex-row justify-between">
					<Text className="text-sm text-darkGray">Subtotal</Text>
					<Text className="text-sm text-darkGray">
						<Currency quantity={basketTotal} currency="GBP" />
					</Text>
				</View>

				<View className="flex-row justify-between">
					<Text className="text-sm text-darkGray">Delivery Fee</Text>
					<Text className="text-sm text-darkGray">
						<Currency quantity={deliveryFee} currency="GBP" />
					</Text>
				</View>

				<View className="flex-row justify-between">
					<Text className="text-sm font-medium">Order Total</Text>
					<Text className="text-sm font-extrabold">
						<Currency
							quantity={basketTotal + deliveryFee}
							currency="GBP"
						/>
					</Text>
				</View>

				<TouchableOpacity
					className="bg-turquoise rounded-lg mx-5"
					onPress={() => navigation.navigate("OrderPrepScreen")}
				>
					<Text className="text-base font-extrabold 
						text-center text-white p-2">
						Place Order
					</Text>
				</TouchableOpacity>
			</View>

			<View className="relative bg-white items-center py-2 
				border-b border-turquoise"
			>
				<ShoppingCartIcon color={turquoise} size={40} />

				<Text className="text-darkGray text-base font-semibold">
					Shopping Basket
				</Text>

				<TouchableOpacity
					className="absolute top-4 right-4"
					onPress={() => navigation.goBack()}
				>
					<XCircleIcon color={turquoise} size={35} />
				</TouchableOpacity>
			</View>

			<View className="flex-row items-center bg-white p-4 
				border-b border-turquoise"
			>
				<View className="flex-row flex-1 items-center space-x-3">
					<Image
						source={{ uri: "https://links.papareact.com/wru" }}
						className="h-7 w-7 bg-lightGray p-4 rounded-full"
					/>
					<Text className="text-sm">Deliver in 50-75 mins</Text>
				</View>

				<TouchableOpacity>
					<Text className="text-sm text-turquoise">Change</Text>
				</TouchableOpacity>
			</View>

			<ScrollView className="mb-40">
				{groupedItemsList}
			</ScrollView>
		</>
	);
};

export default ShoppingBasket;
