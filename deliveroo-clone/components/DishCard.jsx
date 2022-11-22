
import React from "react";
import Currency from "react-currency-formatter";
import { useSelector, useDispatch } from "react-redux";
import {
	addToBasket, removeFromBasket, selectBasketById
} from "../features/basketSlice";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const turquoise = "#00ccbb";

const DishCard = ({ id, name, description, imgURL, price }) => {
	const [isPressed, setIsPressed] = React.useState(false);

	const basketItemsById = useSelector((state) => selectBasketById(state, id));
	const dispatch = useDispatch();

	const addItemToBasket = (item) => {
		dispatch(addToBasket(item));
	};

	const removeItemFromBasket = (itemId) => {
		if (!basketItemsById.length) {
			return;
		}
		dispatch(removeFromBasket(itemId));
	};

	return (
		<TouchableOpacity
			key={id}
			className="w-full bg-white"
			onPress={() => setIsPressed(!isPressed)}
		>
			<View className="border border-b-lighterGray 
				border-x-0 border-t-0 p-4"
			>
				<View className="flex-row mb-3">
					<View className="flex-1">
						<Text className="mb-2 text-sm font-bold">{name}</Text>
						<Text className="text-darkGray mb-3">{description}</Text>
						<Text>
							<Currency
								className="text-darkGray"
								quantity={price}
								currency="GBP"
							/>
						</Text>
					</View>

					<Image
						className="ml-4 w-20 h-20"
						source={{ uri: imgURL }}
					/>
				</View>

				{isPressed &&
					<View className="flex-row space-x-2 items-center">
						<TouchableOpacity onPress={() => removeItemFromBasket(id)} >
							<MinusCircleIcon
								color={basketItemsById.length ? turquoise : "gray"}
								size={40} opacity={0.7}
							/>
						</TouchableOpacity>

						<Text>{basketItemsById.length}</Text>

						<TouchableOpacity
							onPress={() => addItemToBasket({
								id, name, description, imgURL, price
							})}
						>
							<PlusCircleIcon color={turquoise} size={40} opacity={0.7} />
						</TouchableOpacity>
					</View>
				}
			</View>
		</TouchableOpacity>
	);
};

export default DishCard;
