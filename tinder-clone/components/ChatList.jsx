import { collection, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { View, Text, FlatList } from "react-native";

import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import ChatRow from "./ChatRow";

const ChatList = () => {
	const [matches, setMatches] = React.useState([]);
	const { user } = useAuth();

	// This fetches all matches for logged
	// in user and store each in an array
	React.useEffect(() =>
		onSnapshot(
			query(
				collection(db, "matches"),
				where("matchedUsers", "array-contains", user.uid)
			),
			(queryResults) => setMatches(
				queryResults.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}))
			)
		), []
	);

	return (
		matches.length ? (
			<FlatList
				data={matches}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<ChatRow matchDetails={item} />
				)}
			/>
		) : (
			<View className="p-5">
				<Text className="text-base text-center">
					You've got no matches yet 😔
				</Text>
			</View>
		)
	);
};

export default ChatList;
