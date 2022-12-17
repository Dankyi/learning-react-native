import React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
	GoogleAuthProvider, signOut,
	signInWithCredential, onAuthStateChanged
} from "firebase/auth";

import { app, auth } from "../firebase";
import {
	WEB_CLIENT_ID, IOS_CLIENT_ID, ANDROID_CLIENT_ID
} from "@env";

// Initialize Firebase
app;

WebBrowser.maybeCompleteAuthSession();

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = React.useState(null);
	const [error, setError] = React.useState(null);

	// This useState is to ensure there are no UI delays between the
	// LoginScreen and HomeScreen for already signed in or authenticated
	// users when app is relaunched. SplashScreen can be applied to cover
	// up the UI delays but this little useState here does the trick
	const [isHomeLoading, setIsHomeLoading] = React.useState(true);

	// This is going to be applied generally for any kind of UI
	// delays that could occur for instance when signing in or out
	const [isLoading, setIsLoading] = React.useState(false);

	const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
		expoClientId: WEB_CLIENT_ID,
		iosClientId: IOS_CLIENT_ID,
		androidClientId: ANDROID_CLIENT_ID,
		scopes: ["profile", "email"],
	});

	const signInWithGoogle = () => {
		setIsLoading(true);
		promptAsync()
			.catch(error => setError(error))
			.finally(() => setIsLoading(false));
	};

	const logout = () => {
		setIsLoading(true);
		signOut(auth)
			.catch(error => setError(error))
			.finally(() => setIsLoading(false));
	};

	// Handles sign in after promptAsync has been fired
	React.useEffect(() => {
		if (response?.type === "success") {
			const { id_token } = response.params;
			const credential = GoogleAuthProvider.credential(id_token);
			signInWithCredential(auth, credential);
		}
	}, [response]);

	// Handles user state when auth state changes (when user signs in/out)
	React.useEffect(() =>
		onAuthStateChanged(auth, (user) => {
			if (user) { // Logged in
				setUser(user);
			} else { // Not logged in
				setUser(null);
			}
			setIsHomeLoading(false);
		}), []);

	// Cache the AuthContext values to optimize the app
	const memoedValues = React.useMemo(() => ({
		user,
		signInWithGoogle,
		isLoading,
		logout,
		error
		// Only run and update the values when these 3 change
	}), [user, isLoading, error]);

	console.log({ user });
	return (
		<AuthContext.Provider value={memoedValues}>
			{!isHomeLoading && children}
		</AuthContext.Provider>
	);
};

export default useAuth = () => {
	return React.useContext(AuthContext);
};

