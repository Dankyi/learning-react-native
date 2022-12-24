import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
	collection, limit, onSnapshot, orderBy, query
} from "firebase/firestore";

import useAuth from "../hooks/useAuth";
import getMatchedUserInfo from "../util/getMatchedUserInfo";
import { db } from "../firebase";

const ChatRow = ({ matchDetails }) => {
	const { user } = useAuth();
	const navigation = useNavigation();
	const [matchedUserInfo, setMatchedUserInfo] = React.useState(null);
	const [lastMessage, setLastMessage] = React.useState("");

	React.useEffect(() => {
		setMatchedUserInfo(
			// Since we have no idea what the id of the matched user is we
			// use this helper function to get rid of the user profile from
			// the match details so we can retrieve that of the matched user
			getMatchedUserInfo(matchDetails.users, user.uid)
		);
	}, []);

	React.useEffect(() =>
		onSnapshot(
			query(
				collection(db, "matches", matchDetails.id, "messages"),
				orderBy("timestamp", "desc"),
				limit(1)
			),
			(queryResults) =>
				setLastMessage(queryResults.docs[0]?.data()?.message)
		), [matchDetails.id]
	);

	return (
		<TouchableOpacity
			className="flex-row items-center bg-white
				px-5 py-3 mx-3 my-1 rounded-lg shadow-md"
			onPress={() => navigation.navigate("MessageScreen", {
				// Since the matchID, loggedInUserInfo and matchedUserInfo will
				// be needed in MessageScreen we create a single object for them
				matchId: matchDetails.id,
				loggedInUserInfo: matchDetails.users[user.uid],
				matchedUserInfo: matchedUserInfo
			})}
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

				<Text>{lastMessage || "Say Hi!"}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ChatRow;
