import { View, Button } from "react-native";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
	const { logout } = useAuth();

	return (
		<View>
			<Button title="logout" onPress={logout} />
		</View>
	);
};

export default HomeScreen;
