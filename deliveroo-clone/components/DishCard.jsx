
import React from "react";
import Currency from "react-currency-formatter";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const turquoise = "#00ccbb";

const DishCard = ({ id, name, description, imgURL, price }) => {
	const [isPressed, setIsPressed] = React.useState(false);
	const [quantity, setQuantity] = React.useState(0);

	const handleMinus = () => {
		if (quantity !== 0) {
			setQuantity(prevQty => prevQty - 1);
		}
	};

	const handlePlus = () => {
		setQuantity(prevQty => prevQty + 1);
	}

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
						<TouchableOpacity onPress={handleMinus}>
							<MinusCircleIcon color={turquoise} size={40} opacity={0.7} />
						</TouchableOpacity>

						<Text>{quantity}</Text>

						<TouchableOpacity onPress={handlePlus}>
							<PlusCircleIcon color={turquoise} size={40} opacity={0.7} />
						</TouchableOpacity>
					</View>
				}
			</View>
		</TouchableOpacity>
	);
};

export default DishCard;
