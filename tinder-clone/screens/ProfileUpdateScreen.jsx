import { useNavigation } from "@react-navigation/native";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import {
	View, Image, TextInput, Keyboard, ScrollView,
	TouchableOpacity, TouchableWithoutFeedback, Text
} from "react-native";
import { db } from "../firebase";

import useAuth from "../hooks/useAuth";

// Todo: Change this form later and use Formik library
// instead for better validation

const ProfileUpdateScreen = () => {
	const { user } = useAuth();
	const navigation = useNavigation();
	const [profilePic, setProfilePic] = React.useState(null);
	const [job, setJob] = React.useState(null);
	const [age, setAge] = React.useState(null);

	const isFormIncomplete = !profilePic || !job || !age;

	const updateUserProfile = () => {
		const userData = {
			id: user.uid,
			displayName: user.displayName,
			photoURL: profilePic,
			job: job,
			age: age,
			timestamp: serverTimestamp()
		};

		// This creates a "users" collection if it doesn't already
		// exist or updates an existing one
		setDoc(doc(db, "users", user.uid), userData)
			.then(() => navigation.navigate("HomeScreen"))
			.catch(error => alert(error.message));
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View className="flex-1 bg-white pt-1">
				<Image
					className="w-full h-20"
					resizeMode="contain"
					source={require("../assets/tinder-logo2.png")}
				/>

				<Text className="text-sm font-semibold self-center">
					Welcome {user.displayName}!
				</Text>

				<Text className="pb-2 text-sm font-semibold self-center">
					Update your profile to find a match!
				</Text>

				{/* Profile Update Card Section */}
				<ScrollView>
					<View className="mb-64 px-6 py-3 mx-6 bg-[#fad9db] shadow-md rounded-md">
						<Text className="mb-4 self-center text-xs font-bold">
							PROFILE UPDATE FORM
						</Text>

						<View className="space-y-5">
							{/* Profile picture */}
							<View>
								<Text className="mb-1 text-sm font-bold text-[#FF5864]">
									Profile Picture
								</Text>

								{/*// Todo: Allow users to upload their pics from their device*/}
								<TextInput
									className="pb-2 px-2 text-sm border bg-white
										border-gray-100 rounded-md"
									placeholder="Enter your profile picture url"
									value={profilePic}
									onChangeText={(text) => setProfilePic(text)}
								/>
							</View>

							{/* Occupation */}
							<View>
								<Text className="mb-1 text-sm font-bold text-[#FF5864]">
									Occupation
								</Text>

								<TextInput
									className="pb-2 px-2 text-sm border bg-white
										border-gray-100 rounded-md"
									placeholder="Enter your occupation"
									value={job}
									onChangeText={(text) => setJob(text)}
								/>
							</View>

							{/* Age */}
							<View>
								<Text className="mb-1 text-sm font-bold text-[#FF5864]">
									Age
								</Text>

								<TextInput
									className="pb-2 px-2 text-sm border bg-white
										border-gray-100 rounded-md"
									placeholder="Enter age"
									value={age}
									maxLength={2}
									keyboardType="numeric"
									onChangeText={(text) => setAge(text)}
								/>
							</View>
						</View>

						{/* Update Profile Button */}
						<TouchableOpacity
							className={`mt-6 w-48 self-center p-3 rounded-xl
								${isFormIncomplete ? "bg-[#e5949a]" : "bg-[#FF5864]"}`}
							disabled={isFormIncomplete}
							onPress={updateUserProfile}
						>
							<Text className="text-lg font-semibold text-center text-white">
								Update Profile
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ProfileUpdateScreen;
