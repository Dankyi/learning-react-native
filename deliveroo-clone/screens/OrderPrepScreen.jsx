import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const OrderPrepScreen = () => {
	const navigation = useNavigation();

	React.useEffect(() => {
		setTimeout(() => {
			navigation.navigate("DeliveryScreen");
		}, 3000);
	}, []);

	return (
		<SafeAreaView
			className="bg-turquoise flex-1 space-y-6
				justify-center items-center"
		>
			<Animatable.Text
				className="text-lighterGray text-center px-4 font-bold"
				animation="slideInDown"
				iterationCount={1}
			>
				Waiting for Restaurant to accept and dispatch your order!
			</Animatable.Text>

			<Progress.Circle color="white" size={65} indeterminate={true} />

			<Animatable.Image
				className="h-80 w-80"
				source={require("../assets/food-delivery.gif")}
				animation="slideInUp"
				iterationCount={1}
			/>

		</SafeAreaView>
	);
};

export default OrderPrepScreen;
