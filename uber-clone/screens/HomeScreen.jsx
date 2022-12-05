import { useDispatch } from "react-redux";
import {
	View, SafeAreaView, Image,
	TouchableWithoutFeedback, Keyboard
} from "react-native";
import {
	GooglePlacesAutocomplete
} from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

import HomeOptions from "../components/HomeOptions";
import { setDestination, setOrigin } from "../slices/navSlice";
import HomeFavourites from "../components/HomeFavourites";

const HomeScreen = () => {
	const dispatch = useDispatch();

	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="p-4">
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<View>
						<Image
							className="w-24 h-8"
							style={{ resizeMode: "contain" }}
							source={{ uri: "https://links.papareact.com/gzs" }}
						/>
					</View>
				</TouchableWithoutFeedback>

				<View>
					<GooglePlacesAutocomplete
						styles={{
							container: {
								backgroundColor: "white",
								paddingTop: 16,
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

				<HomeOptions />
				<HomeFavourites />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
