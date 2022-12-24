import { View, Text } from "react-native";

const SenderMessage = ({ message }) => {
	return (
		<View className="self-start bg-blue-600 px-5 py-3
			mx-3 ml-auto my-2 rounded-lg rounded-tr-none"
		>
			<Text className="text-white text-base">
				{message.message}
			</Text>
		</View>
	);
};

export default SenderMessage;
