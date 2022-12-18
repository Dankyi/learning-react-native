import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
	const { signInWithGoogle, isLoading } = useAuth();

	return (
		<View className="flex-1">
			<ImageBackground
				className="flex-1"
				source={{ uri: "https://tinder.com/static/tinder.png" }}
				resizeMode="cover"
			>
				<TouchableOpacity
					className="absolute bottom-32 self-center
						bg-white p-2 rounded-xl"
					onPress={signInWithGoogle}
				>
					<Text className="text-lg text-center">
						Login & start messaging
					</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default LoginScreen;
