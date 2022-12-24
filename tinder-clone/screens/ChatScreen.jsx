import { SafeAreaView } from "react-native";
import ChatList from "../components/ChatList";
import Header from "../components/Header";

const ChatScreen = () => {
	return (
		<SafeAreaView>
			<Header title="Chats" />
			<ChatList />
		</SafeAreaView>
	);
};

export default ChatScreen;
