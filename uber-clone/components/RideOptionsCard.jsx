import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { useSelector } from "react-redux";
import {
	View, Text, Image, SafeAreaView,
	TouchableOpacity, FlatList
} from "react-native";

import { selectTravelTimeInfo } from "../slices/navSlice";

const data = [
	{
		id: "1",
		title: "UberX",
		image: "https://links.papareact.com/3pn",
		multiplier: 1
	},
	{
		id: "2",
		title: "Uber XL",
		image: "https://links.papareact.com/5w8",
		multiplier: 1.35
	},
	{
		id: "3",
		title: "Uber LUX",
		image: "https://links.papareact.com/7pf",
		multiplier: 1.75
	}
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
	const navigation = useNavigation();
	const travelTimeInfo = useSelector(selectTravelTimeInfo);
	const [selected, setSelected] = React.useState(null);

	return (
		<SafeAreaView className="flex-grow bg-white">
			<View>
				<TouchableOpacity
					className="absolute top-2 left-2 p-3 rounded-full z-30"
					onPress={() => navigation.navigate("MapScreenBottom")}
				>
					<Icon name="chevron-left" type="fontawesome" />
				</TouchableOpacity>

				<Text className="text-center py-5 text-base">
					Select a Ride - {travelTimeInfo?.distance?.text}
				</Text>
			</View>

			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item: { id, title, image, multiplier }, item }) => (
					<TouchableOpacity
						className={`flex-row items-center justify-between px-10
							${id === selected?.id && "bg-blue-100"}
						`}
						onPress={() => setSelected(item)}
					>
						<Image
							className="w-24 h-24"
							style={{ resizeMode: "contain" }}
							source={{ uri: image }}
						/>

						<View className="-ml-16">
							<Text className="text-base font-semibold">
								{title}
							</Text>

							<Text>
								{travelTimeInfo?.duration?.text}
							</Text>
						</View>

						<Text className="text-base">
							{new Intl.NumberFormat("en-gb", {
								style: "currency",
								currency: "GBP"
							}).format((travelTimeInfo?.duration?.value *
								SURGE_CHARGE_RATE * multiplier) / 100
							)}
						</Text>
					</TouchableOpacity>
				)}
			/>

			<View className="mt-auto border-t border-gray-200">
				<TouchableOpacity
					className={
						`bg-black py-3 m-3 
						${!selected && "bg-gray-400"}`
					}
					disabled={!selected ? true : false}
				>
					<Text className="text-center text-base text-white">
						Choose {selected?.title}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default RideOptionsCard;
