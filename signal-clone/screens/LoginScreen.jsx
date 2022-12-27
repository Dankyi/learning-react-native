import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { Button, Input, Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	return (
		<KeyboardAvoidingView
			className="flex-1 items-center justify-center p-10"
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={10}
		>
			<StatusBar style="light" />

			<Image
				style={{ width: 160, height: 160, marginBottom: 20 }}
				source={require("../assets/signal.png")}
			/>

			<View className="w-72">
				<Input
					placeholder="Email"
					autoFocus
					type="Email"
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

			<View className="mb-20 space-y-3 w-44">
				<Button title="LOGIN" />

				<Button title="REGISTER" type="outline" />
			</View>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;
