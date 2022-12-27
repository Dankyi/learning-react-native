import React from "react";
import {
	View, KeyboardAvoidingView, Platform,
	TouchableWithoutFeedback, Keyboard
} from "react-native";
import { Button, Input, Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<KeyboardAvoidingView
				className="flex-1 items-center px-10"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={10}
			>
				<StatusBar style="light" />

				<View className="mt-10">
					<Image
						style={{ width: 160, height: 160, marginBottom: 20 }}
						source={require("../assets/signal.png")}
					/>
				</View>

				<View className="w-full my-4 space-y-2">
					<Input
						placeholder="Email"
						autoFocus
						type="email"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>

					<Input
						placeholder="Password"
						type="password"
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
				</View>

				<View className="mb-20 space-y-5 w-44">
					<Button title="LOGIN" />

					<Button
						title="REGISTER"
						type="outline"
					/>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;
