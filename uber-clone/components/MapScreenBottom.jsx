import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { GOOGLE_MAPS_API_KEY } from "@env";
import { setDestination } from "../slices/navSlice";
import HomeFavourites from "./HomeFavourites";
import { Icon } from "@rneui/base";

const MapScreenBottom = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	return (
		<SafeAreaView className="flex-1 bg-white">
			<Text className="py-2 text-base text-center">
				Hi there!
			</Text>
			<View className="flex-shrink border-gray-200 border-t px-5">
				<View>
					<GooglePlacesAutocomplete
						styles={{
							container: {
								backgroundColor: "white",
								paddingTop: 20,
								flex: 0
							},
							textInputContainer: {
								backgroundColor: "white"
							},
							textInput: {
								backgroundColor: "#ddd",
								fontSize: 18
							},
							predefinedPlacesDescription: {
								color: "#1faadb"
							}
						}}
						placeholder="Where to?"
						minLength={2}
						nearbyPlacesAPI="GooglePlacesSearch"
						debounce={400}
						enablePoweredByContainer={false}
						// returnKeyType={"search"}
						fetchDetails={true}
						query={{
							key: GOOGLE_MAPS_API_KEY,
							language: "en"
						}}
						// store the destination location data in redux store
						onPress={(data, details = null) => {
							dispatch(setDestination({
								location: details.geometry.location,
								description: data.description
							}));

							navigation.navigate("RideOptionsCard");
						}}
					/>
				</View>

				<HomeFavourites />

				<View className="flex-row justify-evenly bg-white mt-5
					border-t border-gray-100 py-2"
				>
					<TouchableOpacity
						className="flex-row bg-black w-24 py-3 px-4
							space-x-2 rounded-full"
						onPress={() => navigation.navigate("RideOptionsCard")}
					>
						<Icon
							name="car"
							type="font-awesome"
							size={18}
							color="white"
						/>

						<Text className="text-white font-bold text-center">
							Rides
						</Text>
					</TouchableOpacity>

					<TouchableOpacity className="flex-row bg-black w-24
						py-3 px-4 space-x-2 rounded-full"
					>
						<Icon
							name="fast-food-outline"
							type="ionicon"
							size={18}
							color="white"
						/>

						<Text className="text-white font-bold text-center">
							Eats
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default MapScreenBottom;
