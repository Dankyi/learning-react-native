import { View, Text } from "react-native";

const ReceiverMessage = ({ message }) => {
	return (
		<View className="self-start bg-green-600 px-5 py-3
			mx-3 mr-auto my-2 rounded-lg rounded-tl-none"
		>
			<Text className="text-white text-base">
				{message.message}
			</Text>
		</View>
	);
};

export default ReceiverMessage;
