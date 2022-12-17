import { View, Button, Text } from "react-native";

import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
	const { signInWithGoogle, isLoading } = useAuth();

	return (
		<View>
			<Text>{isLoading ? "loading ..." : "Login to the app"}</Text>
			<Button title="Login" onPress={signInWithGoogle} />
		</View>
	);
};

export default LoginScreen;
