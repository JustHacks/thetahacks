import React, { useEffect, useState } from "react";
import firebase from "firebase";

const LogoutPage = () => {
	useEffect(async () => {
		if(firebase.auth().currentUser){
			await firebase.auth().signOut();
		}
		location = "/";
	}, []);

	return (
		<div>"Logging out..."</div>
	);
};

export default LogoutPage;