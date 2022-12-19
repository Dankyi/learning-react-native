import React from "react";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";
import {
	AntDesign, Ionicons,
	Feather, MaterialCommunityIcons
} from "@expo/vector-icons";
import {
	SafeAreaView, View, TouchableOpacity, Image, Text
} from "react-native";

import useAuth from "../hooks/useAuth";
import { dummyData } from "../dummy-data";

const HomeScreen = () => {
	const [profilePressed, setProfilePressed] = React.useState(false);
	const [numCardSwiped, setNumCardSwiped] = React.useState(0);
	const { user, logout } = useAuth();
	const navigation = useNavigation();
	const swipeRef = React.useRef(null);

	return (
		<SafeAreaView className="flex-1">
			{/* Header section of HomeScreen */}
			<View className="flex-row justify-between items-center px-4">
				{/* Profile picture and its dropdown */}
				<View className="relative">
					{/* Profile picture */}
					<TouchableOpacity
						onPress={() => setProfilePressed(!profilePressed)}
					>
						<Image
							className="w-10 h-10 rounded-full"
							source={{ uri: user.photoURL }}
						/>
					</TouchableOpacity>

					{/* Dropdown */}
					<View className={`absolute top-11 w-20 h-14 p-2 shadow-lg
						bg-white rounded-md ${!profilePressed && "hidden"}`}
					>
						<TouchableOpacity
							className="flex-row space-x-1"
							onPress={logout}
						>
							<MaterialCommunityIcons
								name="logout"
								color="#FF5864"
								size={15}
							/>

							<Text>Logout</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* Tinder icon */}
				<TouchableOpacity
					onPress={() => navigation.navigate("ProfileUpdateScreen")}>
					<Image
						className="w-12 h-12"
						source={require("../assets/tinder-logo.png")}
					/>
				</TouchableOpacity>

				{/* Chat icon */}
				<TouchableOpacity
					onPress={() => navigation.navigate("ChatScreen")}>
					<Ionicons
						name="chatbubbles-sharp"
						color="#FF5864"
						size={30}
					/>
				</TouchableOpacity>
			</View>

			{/* Swiper Card Section */}
			<View className="flex-1 -mt-6">
				<Swiper
					ref={swipeRef}
					containerStyle={{ backgroundColor: "tranparent" }}
					cards={dummyData}
					cardIndex={0}
					stackSize={dummyData.length}
					overlayLabels={{
						left: {
							title: "NOPE!",
							style: {
								label: {
									textAlign: "right",
									color: "#FF5864"
								}
							}
						},
						right: {
							title: "MATCH!",
							style: {
								label: {
									textAlign: "left",
									color: "#4BB543"
								}
							}
						}
					}}
					animateCardOpacity
					onSwipedLeft={() => {
						// Pass
					}}
					onSwipedRight={() => {
						// Match
					}}
					verticalSwipe={false}
					renderCard={(card) => (
						<View
							key={card.id}
							className="relative bg-[#FF5864] h-3/4 rounded-xl"
						>
							<Image
								className="absolute top-0 w-full h-full rounded-xl"
								source={{ uri: card.photoURL }}
							/>

							<View className="flex-row absolute bottom-0 w-full px-6
								py-2 bg-white justify-between shadow-sm rounded-b-xl"
							>
								<View>
									<Text className="text-lg font-bold">
										{card.firstName} {card.lastName}
									</Text>
									<Text>{card.job}</Text>
								</View>

								<Text className="text-lg font-bold">{card.age}</Text>
							</View>
						</View>
					)}
				/>
			</View>

			{/* Cancel and Like Section */}
			<View className="flex-row justify-evenly mb-4">
				{/* Cancel Button */}
				<TouchableOpacity
					className="w-16 h-16 justify-center items-center
						bg-[#FF5864] rounded-full"
					onPress={() => {
						// Only swipe if there are some cards.
						// Print "swipeRef.current "to see all of its properties
						const stackSize = swipeRef.current.props.stackSize;
						if (numCardSwiped < stackSize) {
							swipeRef.current.swipeLeft();
							setNumCardSwiped(prevNum => prevNum + 1);
						}
					}}
				>
					<Feather name="x" size={26} />
				</TouchableOpacity>

				{/* Like Button */}
				<TouchableOpacity
					className="w-16 h-16 justify-center items-center
						bg-[#4BB543] rounded-full"
					onPress={() => {
						// Only swipe if there are some cards.
						// Print "swipeRef.current "to see all of its properties
						const stackSize = swipeRef.current.props.stackSize;
						if (numCardSwiped < stackSize) {
							swipeRef.current.swipeRight();
							setNumCardSwiped(prevNum => prevNum + 1);
						}
					}}
				>
					<AntDesign name="heart" size={24} />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
