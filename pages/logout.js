import React, { useEffect, useState } from "react";
import firebase from "firebase";

const LogoutPage = () => {
	const [working, setWorking] = useState(true);

	useEffect(async () => {
		if(firebase.auth().currentUser)
			await firebase.auth().signOut();
		setWorking(false);
	}, []);

	return (
		<div>{working ? "Logging out...": "Done!"}</div>
	);
};

export default LogoutPage;