import React from "react";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";
import {
	AntDesign, Ionicons, FontAwesome5,
	Feather, MaterialCommunityIcons
} from "@expo/vector-icons";
import {
	Text, View, TouchableOpacity, Image,
	SafeAreaView, TouchableWithoutFeedback
} from "react-native";

import useAuth from "../hooks/useAuth";
import { dummyData } from "../dummy-data";

const HomeScreen = () => {
	const [profPicPressed, setProfPicPressed] = React.useState(false);
	const [numCardSwiped, setNumCardSwiped] = React.useState(0);
	const { user, logout } = useAuth();
	const navigation = useNavigation();
	const swipeRef = React.useRef(null);

	const hideDropdown = () => setProfPicPressed(false);

	return (
		<TouchableWithoutFeedback onPress={hideDropdown}>
			<SafeAreaView className="flex-1">
				{/* Header section of HomeScreen */}
				<View className="flex-row justify-between items-center px-4">
					{/* Profile picture and its dropdown */}
					<View className="relative">
						{/* Profile picture */}
						<TouchableOpacity
							onPress={() => setProfPicPressed(!profPicPressed)}
						>
							<Image
								className="w-10 h-10 rounded-full"
								source={{ uri: user.photoURL }}
							/>
						</TouchableOpacity>

						{/* Dropdown */}
						<View
							className={`absolute top-11 w-40 h-20 px-2.5 py-2.5
								space-y-4 bg-white shadow-lg rounded-md z-50
								${!profPicPressed && "hidden"}`}
						>
							<TouchableOpacity
								className="flex-row space-x-2"
								onPress={() => {
									setProfPicPressed(!profPicPressed);
									logout();
								}}
							>
								<MaterialCommunityIcons
									name="logout"
									color="#FF5864"
									size={20}
								/>

								<Text>Logout</Text>
							</TouchableOpacity>

							<TouchableOpacity
								className="flex-row space-x-1.5"
								onPress={() => {
									setProfPicPressed(!profPicPressed);
									navigation.navigate("ProfileUpdateScreen");
								}}
							>
								<FontAwesome5
									name="user-edit"
									color="#FF5864"
									size={18}
								/>

								<Text>Update Profile</Text>
							</TouchableOpacity>
						</View>
					</View>

					{/* Tinder icon */}
					<TouchableOpacity
						onPress={() => {
							hideDropdown();
							navigation.navigate("ProfileUpdateScreen");
						}}
					>
						<Image
							className="w-12 h-12"
							source={require("../assets/tinder-logo.png")}
						/>
					</TouchableOpacity>

					{/* Chat icon */}
					<TouchableOpacity
						onPress={() => {
							hideDropdown();
							navigation.navigate("ChatScreen");
						}}
					>
						<Ionicons
							name="chatbubbles-sharp"
							color="#FF5864"
							size={30}
						/>
					</TouchableOpacity>
				</View>

				{/* Swiper Card Section */}
				<View className="flex-1 -mt-6 -z-10">
					{/* Static card beneath the Swiper to show user if 
						there are no pictures to swipe */}
					<View
						className={`${(numCardSwiped + 1 <= dummyData.length)
							? "mx-7 mt-24 h-3/5"
							: "mx-5 mt-16 h-5/6"}
							relative bg-[#fad9db] items-center
							justify-center pb-3 rounded-xl`
						}
					>
						<Text className="py-3 px-16 text-sm text-center font-semibold">
							OOPS! There are no more pictures
						</Text>

						<Image
							className="w-48 h-48"
							source={{ uri: "https://links.papareact.com/6gb" }}
						/>
					</View>

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
							hideDropdown();
							setNumCardSwiped(prevNum => prevNum + 1);
						}}
						onSwipedRight={() => {
							// Match
							hideDropdown();
							setNumCardSwiped(prevNum => prevNum + 1);
						}}
						verticalSwipe={false}
						renderCard={(card) => card && (
							<TouchableWithoutFeedback onPress={hideDropdown}>
								<View
									key={card.id}
									className="relative bg-blue-200 h-3/4 rounded-xl"
								>
									<Image
										className="absolute top-0 w-full h-full rounded-xl"
										source={{ uri: card.photoURL }}
									/>

									<View
										className="flex-row absolute bottom-0 w-full px-6 py-2 
											bg-white justify-between shadow-sm rounded-b-xl"
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
							</TouchableWithoutFeedback>
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
							hideDropdown();
							// Only swipe if there are some cards.
							// Print "swipeRef.current "to see all of its properties
							const stackSize = swipeRef?.current?.props?.stackSize;
							if (numCardSwiped < stackSize) {
								swipeRef.current.swipeLeft();
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
							hideDropdown();
							// Only swipe if there are some cards.
							// Print "swipeRef.current "to see all of its properties
							const stackSize = swipeRef?.current?.props?.stackSize;
							if (numCardSwiped < stackSize) {
								swipeRef.current.swipeRight();
							}
						}}
					>
						<AntDesign name="heart" size={24} />
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

export default HomeScreen;
