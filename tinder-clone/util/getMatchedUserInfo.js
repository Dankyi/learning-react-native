const getMatchedUserInfo = (users, loggedInUser) => {
	// Create a copy of the original "users" to manipulate. This
	// is to ensure that the original version is in a clean state
	const newUsers = { ...users };

	// Delete the logged in user details from the temporary
	// newUsers object so only their match's details will be left
	delete newUsers[loggedInUser];

	// Destructure the returned array and store the 2 values
	// in it (i.e a string and an object) as "id" and "user"
	const [id, user] = Object.entries(newUsers).flat();

	// Return the result as an object.
	// NB: Can also just return only {...user }
	return { id, ...user };
};

export default getMatchedUserInfo;
