import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileUpdateScreen from "./screens/ProfileUpdateScreen";
import useAuth from "./hooks/useAuth";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	const { user } = useAuth();

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{user ? (
				<>
					<Stack.Group>
						<Stack.Screen
							name="HomeScreen"
							component={HomeScreen}
						/>

						<Stack.Screen
							name="ChatScreen"
							component={ChatScreen}
						/>
					</Stack.Group>

					<Stack.Group screenOptions={{ presentation: "modal" }}>
						<Stack.Screen
							name="ProfileUpdateScreen"
							component={ProfileUpdateScreen}
						/>
					</Stack.Group>
				</>
			) : (
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
				/>
			)}
		</Stack.Navigator>
	);
};

export default StackNavigator;
