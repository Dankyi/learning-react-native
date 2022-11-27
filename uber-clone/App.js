import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import store from "./store";

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<HomeScreen />
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
