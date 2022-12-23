import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import useAuth from "../hooks/useAuth";
import getMatchedUserInfo from "../util/getMatchedUserInfo";

const ChatRow = ({ matchDetails, lastMessage }) => {
	const { user } = useAuth();
	const [matchedUserInfo, setMatchedUserInfo] = React.useState(null);

	React.useEffect(() => {
		setMatchedUserInfo(
			getMatchedUserInfo(matchDetails.users, user.uid)
		);
	}, []);

	return (
		<TouchableOpacity
			className="flex-row items-center bg-white
				px-5 py-3 mx-3 my-1 rounded-lg shadow-md"
		>
			<View className="w-16 h-16 mr-4 bg-gray-300 rounded-full">
				<Image
					className="w-full h-full"
					resizeMode="contain"
					source={{ uri: matchedUserInfo?.photoURL }}
				/>
			</View>

			<View>
				<Text className="text-base font-semibold">
					{matchedUserInfo?.displayName}
				</Text>

				<Text>Say Hi!</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ChatRow;
