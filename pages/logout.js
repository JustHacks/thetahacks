import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { useRouter } from "next/router";

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