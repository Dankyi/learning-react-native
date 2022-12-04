import { View, SafeAreaView, Image } from "react-native";
import { useDispatch } from "react-redux";
import {
	GooglePlacesAutocomplete
} from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

import NavOptions from "../components/NavOptions";
import { setDestination, setOrigin } from "../slices/navSlice";
import HomeFavourites from "../components/HomeFavourites";

const HomeScreen = () => {
	const dispatch = useDispatch();

	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="p-4">
				<Image
					className="w-24 h-8 object-contain"
					source={{ uri: "https://links.papareact.com/gzs" }}
				/>

				<View className="mt-4 mb-8">
					<GooglePlacesAutocomplete
						placeholder="Where from?"
						minLength={2}
						nearbyPlacesAPI="GooglePlacesSearch"
						debounce={400}
						textInputProps={{ fontSize: 18 }}
						enablePoweredByContainer={false}
						returnKeyType={"search"}
						fetchDetails={true}
						query={{
							key: GOOGLE_MAPS_API_KEY,
							language: "en"
						}}
						// store the origin location data in redux store
						onPress={(data, details = null) => {
							dispatch(setOrigin({
								location: details.geometry.location,
								description: data.description
							}));

							dispatch(setDestination(null));
						}}
					/>
				</View>

				<NavOptions />
				<HomeFavourites />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
