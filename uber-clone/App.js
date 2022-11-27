import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
	return (
		<Provider store={store}>
			<View className="mt-24 self-center">
				<Text className="text-blue-600">
					Testing NativeWind Installation
				</Text>
			</View>
		</Provider>
	);
};

export default App;
