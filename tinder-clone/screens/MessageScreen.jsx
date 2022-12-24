import React from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
	addDoc, collection, onSnapshot,
	orderBy, query, serverTimestamp
} from "firebase/firestore";
import {
	View, SafeAreaView, KeyboardAvoidingView, Platform, Keyboard,
	TextInput, TouchableOpacity, TouchableWithoutFeedback, FlatList
} from "react-native";

import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import SenderMessage from "../components/SenderMessage";
import ReceiverMessage from "../components/ReceiverMessage";
import { db } from "../firebase";

const MessageScreen = () => {
	const { user } = useAuth();
	const { params } = useRoute();
	const { matchId, loggedInUserInfo, matchedUserInfo } = params;
	const [text, setText] = React.useState("");
	const [messages, setMessages] = React.useState([]);

	// This fetches all messages in real time for a particular match id
	React.useEffect(() =>
		onSnapshot(
			query(
				collection(db, "matches", matchId, "messages"),
				orderBy("timestamp", "desc")
			),
			(queryResults) => setMessages(
				queryResults.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}))
			)
		), [matchId]
	);

	// This saves the loggedInUser's message to their specific
	// match in a collection under their unique match id
	const sendTextDB = () => {
		const msgData = {
			userId: loggedInUserInfo.id,
			displayName: loggedInUserInfo.displayName,
			photoURL: loggedInUserInfo.photoURL,
			message: text,
			timestamp: serverTimestamp()
		};

		const msgCollRef = collection(db, "matches", matchId, "messages");
		addDoc(msgCollRef, msgData);

		setText("");
	};

	return (
		<SafeAreaView className="flex-1">
			<Header
				title={matchedUserInfo.displayName}
				photoURL={matchedUserInfo.photoURL}
				callEnabled
			/>

			<KeyboardAvoidingView
				className="flex-1"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={10}
			>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<FlatList
						className="pl-4 "
						data={messages}
						keyExtractor={item => item.id}
						inverted={-1}
						renderItem={({ item: message }) =>
							message.userId === user.uid
								? <SenderMessage key={message.id} message={message} />
								: <ReceiverMessage key={message.id} message={message} />
						}
					/>
				</TouchableWithoutFeedback>

				{/* Send message section */}
				<View className="flex-row justify-between px-5 
					py-2 border-t border-gray-200 space-x-1">
					<TextInput
						className="flex-1 h-12 text-base pb-3 pt-1
							 px-4 bg-gray-200 rounded-full"
						placeholder="Send Message"
						onChangeText={setText}
						onSubmitEditing={sendTextDB}
						value={text}
					/>

					<TouchableOpacity
						className="w-12 h-12 p-2 items-center rounded-full"
						onPress={sendTextDB}
					>
						<Ionicons name="send" size={25} color="#FF5864" />
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default MessageScreen;
